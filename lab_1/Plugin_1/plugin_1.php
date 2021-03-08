<?php

/**
 * Plugin Name: Notice board plugin
 * Description: Plugin z pierwszego zadania lab 1
 * Version: 1.0
 * Requires at least: 5.0
 * Requires PHP: 7.2
 * Author: Szymon Panek, Maciej Witkowski
 */

// define('WP_DEBUG', true);          // Turn on debug mode
// define('WP_DEBUG_LOG', true);      // Logs errors to wp-content/debug.log
// define('WP_DEBUG_DISPLAY', true);

// Function that generates Admin Page for this plugin
function p1_admin_page()
{
	// Get _POST variable from globals
	global $_POST;
	$array = get_option('p1_array');
	if (gettype($array) != 'array') {
		$array = [];
	}
	// Process changes from the form that was sent
	if (isset($_POST['p1_type_of_change'])) {
		// Based on hidden input "p1_type_of_change" process the data in differnt ways
		if ($_POST['p1_type_of_change'] == 'NEW') {
			array_push($array, $_POST['p1_value']);
			echo "<div class='notice notice-success isdismissible'><p>Dodano nowe ogłoszenie o treści: \"{$_POST['p1_value']}\"</p></div>";
			update_option('p1_array', $array);
		} elseif ($_POST['p1_type_of_change'] == 'DEL') {
			$del = count($_POST['to_del']);
			for ($i = $del - 1; $i >= 0; $i--) {
				array_splice($array, $_POST['to_del'][$i], 1);
			}
			echo "<div class='notice notice-success isdismissible'><p>Usunięto {$del} ogłoszeń</p></div>";
			update_option('p1_array', $array);
		}
	}

	// Get fresh value of p1_array before generating a view
	$array = get_option('p1_array');
	if (gettype($array) != 'array') {
		$array = [];
	}
?>
	<div class="wrap">
		<h1>Plugin zadanie 1</h1>
		<h2>Nowe ogłoszenie</h2>
		<form name="p1_form" method="post">
			<input type="hidden" name="p1_type_of_change" value="NEW">
			<?php
			$settings = array(
				'textarea_name' => 'p1_value',
				'tinymce'       => TRUE,
				'teeny' => TRUE,
				'media_buttons' => FALSE
			);

			wp_editor("", "p1_text_area_id", $settings);
			?>
			<p class="submit"><input type="submit" value="Dodaj"></p>
		</form>

		<h2>Lista ogłoszeń</h2>

		<form name="p1_form" method="post">
			<input type="hidden" name="p1_type_of_change" value="DEL">
			<p>Wybierz ogłoszenia od usunięcia
				<?php
				for ($i = 0; $i < count($array); $i++) {
					$notice_parsed = htmlspecialchars($array[$i]);
					echo "
					<div>
						<input type=\"checkbox\" name=\"to_del[]\" value=\"{$i}\"/>
						<span>{$notice_parsed}</span>
						</div>
					";
				}
				?>
			</p>
			<p class="submit"><input type="submit" value="Usuń zaznaczone"></p>
		</form>
	</div>
<?php

}

// Initialization of admin page
function p1_admin_actions_register_menu()
{
	add_options_page(
		"Notice board plugin",
		"Notice board",
		'manage_options',
		"p1",
		"p1_admin_page"
	);
}

// Associate the admin page function with the hook
add_action('admin_menu', 'p1_admin_actions_register_menu');

$notice_array = [];

function nb_init_notices_array()
{

	global $notice_array;
	$notice_array = get_option('p1_array');
	if (gettype($notice_array) != 'array') {
		$notice_array = [];
	}
}

// Function for generating content of the notice
function nb_add_notice($content)
{

	if (nb_contains_tag(get_the_ID(), 'announcement')) {
		global $notice_array;
		shuffle($notice_array);

		$custom_content = array_pop($notice_array);
		if ($custom_content) {
			$custom_content = "<div class='notice-board-message'>" . $custom_content . "</div>";
		}

		$custom_content .= $content;
		return $custom_content;
	}
	return $content;
}

function naph_register_styles()
{
	//register style
	wp_register_style('naph_styles', plugins_url('/css/style.css', __FILE__));
	//enable style (load in meta of html)
	wp_enqueue_style('naph_styles');
}

add_action('init', 'naph_register_styles');
add_action('wp', 'nb_init_notices_array');

add_filter('the_content', 'nb_add_notice');

// Function that uses wordpress posts tags
function nb_contains_tag($post_id, $tag)
{
	foreach (wp_get_post_tags($post_id) as $a) {
		if ($a->name === $tag) return true;
	}
	return false;
}

?>