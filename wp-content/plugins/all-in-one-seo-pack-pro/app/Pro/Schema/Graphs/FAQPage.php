<?php
namespace AIOSEO\Plugin\Pro\Schema\Graphs;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use AIOSEO\Plugin\Common\Schema\Graphs as CommonGraphs;

/**
 * FAQPage graph class.
 *
 * @since 4.0.13
 */
class FAQPage {
	/**
	 * Returns the graph data.
	 *
	 * @since 4.0.13
	 *
	 * @param  Object $graphData      The graph data.
	 * @param  Object $blockGraphData The block data.
	 * @return array                  The parsed graph data.
	 */
	public function get( $graphData = null, $blockGraphData = null ) {
		if ( ! empty( $blockGraphData ) ) {
			// If we're dealing with a block graph, return data as subgraph without the mainEntity parent since we'll do that later.
			if ( ! empty( $blockGraphData->question ) && ! empty( $blockGraphData->answer ) ) {
				return [
					'@type'          => 'Question',
					'name'           => $blockGraphData->question,
					'acceptedAnswer' => [
						'@type' => 'Answer',
						'text'  => $blockGraphData->answer
					]
				];
			}

			return [];
		}

		$subGraphs = [];
		if ( empty( $graphData->properties->questions ) ) {
			return [];
		}

		foreach ( $graphData->properties->questions as $questionData ) {
			if ( empty( $questionData->question ) || empty( $questionData->answer ) ) {
				continue;
			}

			$subGraphs[] = [
				'@type'          => 'Question',
				'name'           => $questionData->question,
				'acceptedAnswer' => [
					'@type' => 'Answer',
					'text'  => $questionData->answer
				]
			];
		}

		if ( empty( $subGraphs ) ) {
			return [];
		}

		return $this->getMainGraph( $subGraphs, $graphData );
	}

	/**
	 * Returns the main FAQ graph with all its subgraphs (questions/answers).
	 *
	 * @since 4.2.3
	 *
	 * @param  array  $subGraphs The subgraphs.
	 * @param  Object $graphData The graph data.
	 * @return array             The main graph data.
	 */
	public function getMainGraph( $subGraphs = [], $graphData = null ) {
		if ( empty( $subGraphs ) ) {
			return [];
		}

		return [
			'@type'       => 'FAQPage',
			'@id'         => ! empty( $graphData->id ) ? aioseo()->schema->context['url'] . $graphData->id : aioseo()->schema->context['url'] . '#faq',
			'name'        => ! empty( $graphData->properties->name ) ? $graphData->properties->name : '',
			'description' => ! empty( $graphData->properties->description ) ? $graphData->properties->description : '',
			'url'         => aioseo()->schema->context['url'],
			'mainEntity'  => $subGraphs,
			'inLanguage'  => get_bloginfo( 'language' ),
			'isPartOf'    => empty( $graphData ) ? [ '@id' => trailingslashit( home_url() ) . '#website' ] : '',
			'breadcrumb'  => [ '@id' => aioseo()->schema->context['url'] . '#breadcrumblist' ]
		];
	}
}