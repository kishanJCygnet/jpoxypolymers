<?php
namespace AIOSEO\Plugin\Pro\Schema;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use AIOSEO\Plugin\Common\Schema as CommonSchema;

/**
 * Builds our schema.
 *
 * @since 4.0.13
 */
class Schema extends CommonSchema\Schema {
	/**
	 * The Pro subdirectories that contain graph classes.
	 *
	 * @since 4.2.5
	 *
	 * @var array
	 */
	private $proGraphSubDirectories = [
		'Music',
		'Product'
	];

	/**
	 * Generates the JSON schema after the graphs/context have been determined.
	 *
	 * @since 4.2.5
	 *
	 * @param  array  $graphs       The graphs from the schema validator.
	 * @param  array  $customGraphs The graphs from the schema validator.
	 * @param  string $defaultGraph The default graph.
	 * @param  bool   $isValidator  Whether the current call is for the validator.
	 * @return string               The JSON schema output.
	 */
	protected function generateSchema( $graphs = [], $customGraphs = [], $defaultGraph = '', $isValidator = false ) {
		// Now, filter the graphs.
		$this->graphs = apply_filters(
			'aioseo_schema_graphs',
			array_unique( array_filter( array_values( $this->graphs ) ) )
		);

		if ( ! $this->graphs ) {
			return '';
		}

		// Check if a WebPage graph is included. Otherwise add the default one.
		$webPageGraphFound = false;
		foreach ( $this->graphs as $graphName ) {
			if ( in_array( $graphName, $this->webPageGraphs, true ) ) {
				$webPageGraphFound = true;
				break;
			}
		}

		$post       = aioseo()->helpers->getPost();
		$metaData   = aioseo()->meta->metaData->getMetaData( $post );
		$postGraphs = ! empty( $graphs ) ? $graphs : [];
		if ( ! empty( $metaData->schema->graphs ) ) {
			$postGraphs = $metaData->schema->graphs;
		}

		foreach ( $postGraphs as $graphData ) {
			if ( is_array( $graphData ) ) {
				$graphData = json_decode( wp_json_encode( $graphData ) );
			}

			if ( in_array( $graphData->graphName, $this->webPageGraphs, true ) ) {
				$webPageGraphFound = true;
				break;
			}
		}

		if ( ! $webPageGraphFound ) {
			$this->graphs[] = 'WebPage';
		}

		// Now that we've determined the graphs, start generating their data.
		$schema = [
			'@context' => 'https://schema.org',
			'@graph'   => []
		];

		foreach ( $this->graphs as $graph ) {
			$namespace = $this->getGraphNamespace( $graph );
			if ( $namespace ) {
				$schema['@graph'][] = ( new $namespace )->get();
				continue;
			}

			// If we still haven't found a graph, check the addons (e.g. Local Business).
			$graphData = $this->getAddonGraphData( $graph );
			if ( ! empty( $graphData ) ) {
				$schema['@graph'][] = $graphData;
				continue;
			}
		}

		// Now, let's also grab all the user-defined graphs (Schema Generator + blocks) if this a post.
		$schema['@graph'] = array_merge( $schema['@graph'], $this->getUserDefinedGraphs( $graphs, $customGraphs ) );

		$schema['@graph'] = apply_filters( 'aioseo_schema_output', $schema['@graph'] );
		$schema['@graph'] = $this->helpers->cleanAndParseData( $schema['@graph'] );

		return isset( $_GET['aioseo-dev'] ) || $isValidator
			? wp_json_encode( $schema, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE )
			: wp_json_encode( $schema );
	}

	/**
	 * Gets the relevant namespace for the given graph.
	 *
	 * @since 4.2.5
	 *
	 * @param  string $graphName The graph name.
	 * @return string            The namespace.
	 */
	protected function getGraphNamespace( $graphName ) {
		// Check if a Pro graph exists.
		// We must do this before we check in the Common graphs in case we override one.
		$namespace = "\AIOSEO\Plugin\Pro\Schema\Graphs\\${graphName}";
		if ( class_exists( $namespace ) ) {
			return $namespace;
		}

		// If we can't find it in the root dir, check if we can find it in a sub dir.
		foreach ( $this->proGraphSubDirectories as $dirName ) {
			$namespace = "\AIOSEO\Plugin\Pro\Schema\Graphs\\{$dirName}\\{$graphName}";
			if ( class_exists( $namespace ) ) {
				return $namespace;
			}
		}

		$namespace = "\AIOSEO\Plugin\Common\Schema\Graphs\\{$graphName}";
		if ( class_exists( $namespace ) ) {
			return $namespace;
		}

		// If we can't find it in the root dir, check if we can find it in a sub dir.
		foreach ( $this->graphSubDirectories as $dirName ) {
			$namespace = "\AIOSEO\Plugin\Common\Schema\Graphs\\{$dirName}\\{$graphName}";
			if ( class_exists( $namespace ) ) {
				return $namespace;
			}
		}

		return '';
	}

	/**
	 * Returns the output for the user-defined graphs (Schema Generator + blocks).
	 *
	 * @since 4.2.5
	 *
	 * @param  array $graphs       The graphs from the validator.
	 * @param  array $customGraphs The custom graphs from the validator.
	 * @return array               The graphs.
	 */
	private function getUserDefinedGraphs( $graphs = [], $customGraphs = [] ) {
		$blockGraphs = $this->getBlockGraphs();

		// Get individual value.
		$post     = aioseo()->helpers->getPost();
		$metaData = aioseo()->meta->metaData->getMetaData( $post );
		if (
			empty( $graphs ) && empty( $metaData->schema->graphs ) &&
			empty( $customGraphs ) && empty( $metaData->schema->customGraphs )
		) {
			return $blockGraphs;
		}

		$userDefinedGraphs = [];
		$graphs            = ! empty( $graphs ) ? $graphs : $metaData->schema->graphs;
		foreach ( $graphs as $graphData ) {
			if ( is_array( $graphData ) ) {
				$graphData = json_decode( wp_json_encode( $graphData ) );
			}

			if (
				empty( $graphData->id ) ||
				empty( $graphData->graphName ) ||
				empty( $graphData->properties )
			) {
				continue;
			}

			// If the graph has a subtype, this is the place where we need to replace the main graph name with the one of the subtype.
			if ( ! empty( $graphData->properties->type ) ) {
				$graphData->graphName = $graphData->properties->type;
			}

			$namespace = $this->getGraphNamespace( $graphData->graphName );
			if ( $namespace ) {
				$userDefinedGraphs[] = ( new $namespace )->get( $graphData );
			}
		}

		$customGraphs = ! empty( $customGraphs ) ? $customGraphs : $metaData->schema->customGraphs;
		foreach ( $customGraphs as $customGraphData ) {
			if ( is_array( $customGraphData ) ) {
				$customGraphData = json_decode( wp_json_encode( $customGraphData ) );
			}

			if ( empty( $customGraphData->schema ) ) {
				continue;
			}

			$customSchema = json_decode( $customGraphData->schema, true );
			if ( ! empty( $customSchema ) ) {
				if ( isset( $customSchema['@graph'] ) && is_array( $customSchema['@graph'] ) ) {
					foreach ( $customSchema['@graph'] as $graph ) {
						$userDefinedGraphs[] = $graph;
					}
				} else {
					$userDefinedGraphs[] = $customSchema;
				}
			}
		}

		return array_merge( $userDefinedGraphs, $blockGraphs );
	}

	/**
	 * Returns the schema for all the schema supported blocks that are embedded into the post.
	 *
	 * @since 4.2.3
	 *
	 * @return array The schema graph data.
	 */
	private function getBlockGraphs() {
		$post = aioseo()->helpers->getPost();
		if ( ! is_a( $post, 'WP_Post' ) ) {
			return [];
		}

		$metaData = aioseo()->meta->metaData->getMetaData( $post );
		if ( empty( $metaData->schema->blockGraphs ) ) {
			return [];
		}

		$graphs                 = [];
		$faqPages               = [];
		static $faqPageInstance = null;
		foreach ( $metaData->schema->blockGraphs as $blockGraphData ) {
			// If the type isn't set for whatever reason, then bail.
			if ( empty( $blockGraphData->type ) ) {
				continue;
			}

			$type = strtolower( $blockGraphData->type );
			switch ( $type ) {
				case 'aioseo/faq':
					if ( null === $faqPageInstance ) {
						$faqPageInstance = new Graphs\FAQPage;
					}

					// FAQ pages need to be collected first and added later because they should be nested under a parent graph.
					$faqPages[] = $faqPageInstance->get( [], $blockGraphData );
					break;
				default:
					break;
			}
		}

		$faqPages = array_filter( $faqPages );
		if ( $faqPages ) {
			$graphs[] = $faqPageInstance->getMainGraph( $faqPages );
		}

		return $graphs;
	}

	/**
	 * Determines the smart graphs that need to be build, as well as the current context for the breadcrumbs.
	 *
	 * This can't run in the constructor since the queried object needs to be available first.
	 *
	 * @since 4.2.5
	 *
	 * @param  bool $isValidator Whether the current call is for the validator.
	 * @return void
	 */
	protected function determineSmartGraphsAndContext( $isValidator = false ) {
		parent::determineSmartGraphsAndContext( $isValidator );

		$loadedAddons = aioseo()->addons->getLoadedAddons();
		if ( empty( $loadedAddons ) ) {
			return;
		}

		// Check if our addons need to register graphs.
		foreach ( $loadedAddons as $loadedAddon ) {
			if ( ! empty( $loadedAddon->schema ) && method_exists( $loadedAddon->schema, 'determineGraphsAndContext' ) ) {
				$this->graphs = array_merge( $this->graphs, $loadedAddon->schema->determineGraphsAndContext() );
			}
		}
	}

	/**
	 * Gets the graph data from our addons.
	 *
	 * @since 4.0.17
	 *
	 * @param  string $graphName The graph name.
	 * @return array             The graph data.
	 */
	public function getAddonGraphData( $graphName ) {
		$loadedAddons = aioseo()->addons->getLoadedAddons();
		if ( empty( $loadedAddons ) ) {
			return [];
		}

		foreach ( $loadedAddons as $loadedAddon ) {
			if ( ! empty( $loadedAddon->schema ) && method_exists( $loadedAddon->schema, 'get' ) ) {
				$graphData = $loadedAddon->schema->get( $graphName );
				if ( ! empty( $graphData ) ) {
					return $graphData;
				}
			}
		}

		return [];
	}

	/**
	 * Returns the simulated schema output for the Schema Validator in the post editor.
	 *
	 * @since 4.2.5
	 *
	 * @param  int    $postId       The post ID.
	 * @param  array  $graphs       The graphs from the schema validator.
	 * @param  array  $customGraphs The custom graphs from the schema validator.
	 * @param  string $defaultGraph The default graph.
	 * @return string               The JSON schema output.
	 */
	public function getValidatorOutput( $postId, $graphs, $customGraphs, $defaultGraph ) {
		$postObject = aioseo()->helpers->getPost( $postId );
		if ( ! is_a( $postObject, 'WP_Post' ) ) {
			return '';
		}

		global $wp_query, $post;
		$post                        = $postObject;
		$wp_query->post              = $postObject;
		$wp_query->posts             = [ $postObject ];
		$wp_query->post_count        = 1;
		$wp_query->queried_object    = $postObject;
		$wp_query->queried_object_id = $postId;
		$wp_query->is_single         = true;
		$wp_query->is_singular       = true;

		$this->determineSmartGraphsAndContext( true );

		// Include the default graph here instead of letting the Schema class pull it from the stored options.
		$this->graphs[] = $defaultGraph;

		return $this->generateSchema( $graphs, $customGraphs, $defaultGraph, true );
	}
}