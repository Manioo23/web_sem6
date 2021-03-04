<?php

/**
 * Plugin Name: Plugin 1
 * Description: Plugin z pierwszego zadania lab 1
 * Version: 1.0
 * Requires at least: 5.0
 * Requires PHP: 7.2
 * Author: Szymon Panek, Maciej Witkowski
 */
define('WP_DEBUG', true);          // Turn on debug mode
define('WP_DEBUG_LOG', true);      // Logs errors to wp-content/debug.log
define('WP_DEBUG_DISPLAY', true);
//delete_option('p1_array');
function p1_admin_page()
{
	// get _POST variable from globals
	global $_POST;
	$array = get_option('p1_array');
	if (gettype($array) != 'array') {
		$array = [];
	}
	// process changes from form
	if (isset($_POST['p1_type_of_change'])) {
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
			<p>Dodaj nową treść ogłoszenia
				<input type="text" name="p1_value">
			</p>
			<p class="submit"><input type="submit" value="Dodaj"></p>
		</form>
		<h2>Lista ogłoszeń</h2>
		<form name="p1_form" method="post">
			<input type="hidden" name="p1_type_of_change" value="DEL">
			<p>Wybierz ogłoszenia od usunięcia
				<?php
				for ($i = 0; $i < count($array); $i++) {
					echo "
					<p>
						<input type=\"checkbox\" name=\"to_del[]\" value=\"{$i}\"/>
						<span>{$array[$i]}</span>
						</p>
					";
				}
				?>
			</p>
			<p class="submit"><input type="submit" value="Usuń zaznaczone"></p>
		</form>
	</div>
<?php

}

function p1_admin_actions_register_menu()
{
	add_options_page(
		"Newly Added Post Highliter",
		"New Post Highliter",
		'manage_options',
		"p1",
		"p1_admin_page"
	);
}

add_action('admin_menu', 'p1_admin_actions_register_menu');
?>