<?php

// This package is not a part of this repo. Use your imagination. :)
include 'CSPage.php';
$page = new CSPage();

$page
	->body('index.html')
	->css('index.css', 'screen')
	->description('A choose-your-own-adventure dirty picture game!')
	->GoogleFont('Droid Serif')
	->keywords('choose your own fapping adventure, choose your own porn adventure, textual sext, textualsext')
	->title('Textual Sext')
	->output();

?>