<?php
namespace AIOSEO\Plugin\Pro\Schema\Graphs;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use AIOSEO\Plugin\Common\Schema\Graphs as CommonGraphs;

/**
 * Software Application graph class.
 *
 * @since 4.0.13
 */
class SoftwareApplication extends CommonGraphs\Graph {
	/**
	 * Returns the graph data.
	 *
	 * @since 4.0.0
	 *
	 * @param  Object $graphData The graph data.
	 * @return array             The parsed graph data.
	 */
	public function get( $graphData = null ) {
		$data = [
			'@type'               => 'SoftwareApplication',
			'@id'                 => ! empty( $graphData->properties->id ) ? aioseo()->schema->context['url'] . $graphData->id : aioseo()->schema->context['url'] . '#softwareApp',
			'name'                => ! empty( $graphData->properties->name ) ? $graphData->properties->name : get_the_title(),
			'description'         => ! empty( $graphData->properties->description ) ? $graphData->properties->description : aioseo()->schema->context['description'],
			'applicationCategory' => ! empty( $graphData->properties->category ) ? $graphData->properties->category : '',
		];

		if ( ! empty( $graphData->properties->operatingSystem ) ) {
			$operatingSystems        = json_decode( $graphData->properties->operatingSystem, true );
			$operatingSystems        = array_map( function ( $operatingSystemObject ) {
				return $operatingSystemObject['value'];
			}, $operatingSystems );
			$data['operatingSystem'] = implode( ',', $operatingSystems );
		}

		if (
			! empty( $graphData->properties->review->author ) &&
			! empty( $graphData->properties->rating->minimum ) &&
			! empty( $graphData->properties->rating->maximum ) &&
			! empty( $graphData->properties->rating->value )
		) {
			$data['review'] = [
				'@type'        => 'Review',
				'headline'     => $graphData->properties->review->headline,
				'reviewBody'   => $graphData->properties->review->content,
				'reviewRating' => [
					'@type'       => 'Rating',
					'ratingValue' => (int) $graphData->properties->rating->value,
					'worstRating' => (int) $graphData->properties->rating->minimum,
					'bestRating'  => (int) $graphData->properties->rating->maximum
				],
				'author'       => [
					'@type' => 'Person',
					'name'  => $graphData->properties->review->author
				]
			];

			$data['aggregateRating'] = [
				'@type'       => 'AggregateRating',
				'ratingValue' => (int) $graphData->properties->rating->value,
				'worstRating' => (int) $graphData->properties->rating->minimum,
				'bestRating'  => (int) $graphData->properties->rating->maximum,
				'reviewCount' => 1
			];
		}

		if ( isset( $graphData->properties->price ) && isset( $graphData->properties->currency ) ) {
			$data['offers'] = [
				'@type'         => 'Offer',
				'price'         => $graphData->properties->price ? $graphData->properties->price : 0,
				'priceCurrency' => $graphData->properties->currency
			];
		}

		return $data;
	}
}