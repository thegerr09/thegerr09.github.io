<?php
$json = json_encode($_POST);

// $file = '<a href="result.json">result.json</a>';
// echo $file;
$my_file = 'result.txt';
$handle = fopen($my_file, 'a');
// $txt = $handle.$json.", \n";.
fwrite($handle, $json.",\n");
fclose($handle);
?>