
<?php
/**
 * Template part for displaying archive
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package simplyjf
 */

?>

<div class="archive" style="animation:listshow 0.5s ease-out both 0.3s">
	<?php
	echo '<time>';
	$postTime=the_time('m-d');
	echo '</time>'; 
	if ( is_single() ) :
		the_title( '<h1 class="entry-title">', '</h1>' );
	else :
		the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
	endif;?>
</div><!-- .archive -->