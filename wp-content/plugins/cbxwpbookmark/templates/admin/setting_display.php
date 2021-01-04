<?php
	/**
	 * Provide a admin area view for the plugin
	 *
	 * This file is used to markup the admin-facing aspects of the plugin.
	 *
	 * @link       codeboxr.com
	 * @since      1.0.0
	 *
	 * @package    Cbxwpbookmark
	 * @subpackage Cbxwpbookmark/admin/partials
	 */
?>
<?php
	// If this file is called directly, abort.
	if ( ! defined( 'WPINC' ) ) {
		die;
	}
?>

<!-- This file should primarily consist of HTML with a little bit of PHP. -->
<div class="wrap">
	<h2 class="wp-heading-inline wp-heading-inline-setting"><?php esc_html_e( 'CBX WP Bookmark Setting', 'cbxwpbookmark' ); ?></h2>

	<div id="poststuff">
		<div id="post-body" class="metabox-holder columns-2">
			<div id="post-body-content">
				<div class="meta-box-sortables ui-sortable">
					<div class="postbox">
						<!--<h3><span><?php esc_html_e( 'Settings', 'cbxwpbookmark' ); ?></span></h3>-->
						<div class="inside">
							<?php
								$settings_api->show_navigation();
								$settings_api->show_forms();
							?>
						</div>
					</div>
				</div>
			</div>
			<?php
				echo cbxwpbookmark_get_template_html( 'admin/sidebar.php', array( 'ref' => $ref, 'settings_api' => $settings_api ) );
			?>
		</div>
		<div class="clear"></div>
	</div>
</div>