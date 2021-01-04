<!-- This file is used to markup the administration form of the widget. -->

<!-- Custom  Title Field -->
<p>
	<label for="<?php echo $this->get_field_id( 'title' ); ?>">
		<?php esc_html_e( 'Title', "cbxwpbookmark" ); ?>
	</label>

	<input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>"
		   name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo $title; ?>" />
</p>

<?php
	$object_types = CBXWPBookmarkHelper::object_types();
?>

<p>
	<label for="<?php echo $this->get_field_id( 'type' ); ?>"> <?php esc_html_e( 'Post Type(s)', "cbxwpbookmark" ); ?>
		<select multiple="true" class="widefat" id="<?php echo $this->get_field_id( 'type' ); ?>"
				name="<?php echo $this->get_field_name( 'type' ); ?>[]">

			<option value="" <?php echo ( sizeof( $type ) == 0 ) ? 'selected="selected"' : ''; ?>>
				<?php esc_html_e( "Select Post Type(s)", "cbxwpbookmark" ) ?>
			</option>
			<?php
				if ( isset( $object_types['builtin']['types'] ) ) {
					echo '<optgroup label="' . esc_html__( 'Built-in Post Types', 'cbxwpbookmark' ) . '">';
					foreach ( $object_types['builtin']['types'] as $type_slug => $type_name ) {
						$type_slug = esc_attr( $type_slug );
						$selected  = in_array( $type_slug, $type ) ? ' selected="selected" ' : '';
						echo '<option value="' . $type_slug . '" ' . $selected . ' >' . esc_attr( $type_name ) . '</option>';
					}
					echo '</optgroup>';
				}

				if ( isset( $object_types['custom']['types'] ) ) {
					echo '<optgroup label="' . esc_html__( 'Built-in Post Types', 'cbxwpbookmark' ) . '">';
					foreach ( $object_types['custom']['types'] as $type_slug => $type_name ) {
						$type_slug = esc_attr( $type_slug );
						$selected  = in_array( $type_slug, $type ) ? ' selected="selected" ' : '';
						echo '<option value="' . $type_slug . '" ' . $selected . ' >' . esc_attr( $type_name ) . '</option>';
					}
					echo '</optgroup>';
				}
			?>
		</select>
    </label>
</p>
<p>
	<label for="<?php echo $this->get_field_id( 'limit' ); ?>">
		<?php esc_html_e( 'Display Limit', "cbxwpbookmark" ); ?>
	</label> <input class="widefat" id="<?php echo $this->get_field_id( 'limit' ); ?>" name="<?php echo $this->get_field_name( 'limit' ); ?>" type="text" value="<?php echo $limit; ?>" />
</p>

<p>
	<label for="<?php echo $this->get_field_id( 'orderby' ); ?>"><?php esc_html_e( "Order By", "cbxwpbookmark" ); ?>
		<select class="widefat" id="<?php echo $this->get_field_id( 'orderby' ); ?>" name="<?php echo $this->get_field_name( 'orderby' ); ?>">
			<option value="object_type" <?php echo ( $orderby == "object_type" ) ? 'selected="selected"' : ''; ?>><?php esc_html_e( "Post Type", "cbxwpbookmark" ) ?></option>
			<option value="object_id" <?php echo ( $orderby == "object_id" ) ? 'selected="selected"' : ''; ?>><?php esc_html_e( "Post ID", "cbxwpbookmark" ) ?></option>
			<option value="id" <?php echo ( $orderby == "id" ) ? 'selected="selected"' : ''; ?>><?php esc_html_e( "Bookmark ID", "cbxwpbookmark" ) ?></option>
			<option value="title" <?php echo ( $orderby == "title" ) ? 'selected="selected"' : ''; ?>><?php esc_html_e( "Post Title", "cbxwpbookmark" ) ?></option>
		</select>
    </label>
</p>

<!-- Selection of Asending or Desending -->
<?php
	$order = strtoupper( $order );
?>
<p>
	<label for="<?php echo $this->get_field_id( 'order' ); ?>"><?php esc_html_e( "Order", "cbxwpbookmark" ); ?>
		<select class="widefat" id="<?php echo $this->get_field_id( 'order' ); ?>" name="<?php echo $this->get_field_name( 'order' ); ?>">
			<option value="ASC" <?php echo ( $order == "ASC" ) ? 'selected="selected"' : ''; ?>><?php esc_html_e( "Ascending", "cbxwpbookmark" ) ?></option>
			<option value="DESC" <?php echo ( $order == "DESC" ) ? 'selected="selected"' : ''; ?>><?php esc_html_e( "Descending", "cbxwpbookmark" ) ?></option>
		</select>
    </label>
</p>
<p>
	<label for="<?php echo $this->get_field_id( 'readmore' ); ?>"><?php esc_html_e( "Read More", "cbxwpbookmark" ); ?>
		<select class="widefat" id="<?php echo $this->get_field_id( 'readmore' ); ?>"
				name="<?php echo $this->get_field_name( 'readmore' ); ?>">

			<option value="1" <?php echo ( $readmore == 1 ) ? 'selected="selected"' : ''; ?>>
				<?php esc_html_e( "Yes", "cbxwpbookmark" ) ?>
			</option>
			<option value="0" <?php echo ( $readmore == 0 ) ? 'selected="selected"' : ''; ?>>
				<?php esc_html_e( "No", "cbxwpbookmark" ) ?>
			</option>
		</select>
    </label>
</p>
<p>
	<label
		for="<?php echo $this->get_field_id( 'honorauthor' ); ?>"><?php esc_html_e( "In Author Archive Show for Author", "cbxwpbookmark" ); ?>

		<select class="widefat" id="<?php echo $this->get_field_id( 'honorauthor' ); ?>"
				name="<?php echo $this->get_field_name( 'honorauthor' ); ?>">

			<option value="1" <?php echo ( $honorauthor == 1 ) ? 'selected="selected"' : ''; ?>>
				<?php esc_html_e( "Yes", "cbxwpbookmark" ) ?>
			</option>

			<option value="0" <?php echo ( $honorauthor == 0 ) ? 'selected="selected"' : ''; ?>>
				<?php esc_html_e( "No", "cbxwpbookmark" ) ?>
			</option>
		</select> </label>
</p>