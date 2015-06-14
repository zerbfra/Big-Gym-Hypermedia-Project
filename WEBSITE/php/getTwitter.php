<?php
/*
 * Big Gym: HYP Project 2014-15
 * getTwitter.php
 * Retrieve last 3 tweets from Twitter account, using TwitterOAuth
 * Author: Zerbinati Francesco
 */

header('Access-Control-Allow-Origin: *');

# Load Twitter class
require "twitteroauth/autoload.php";

use Abraham\TwitterOAuth\TwitterOAuth;

# Define constants
define('CONSUMER_KEY', 'ao3W0399acg1kVdmHqARnZyqA');
define('CONSUMER_SECRET', 'droNxiHoDlFjxXLdkuI7UCWUe78i4apL8NAoxxnFhUM1rJI20a');
$access_token = '88692560-aDiWKCBAeXkK539Js85uGdUnv5Q7rSBTuKqPKqL0l';
$access_token_secret = 'YsgGJzft885ZjYD4TuVzUBzd5B1sSjUDpleo236NdZVXE';

# Create the connection
$connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, $access_token, $access_token_secret);

$twitter_feed = $connection->get("statuses/user_timeline", array("screen_name" => "zerbfra" ,"count" => 2, "exclude_replies" => true));


# Example output
if(!empty($twitter_feed)) {

    $tweets = array();
    foreach($twitter_feed as $item)
    {
        array_push($tweets,$item->text);
    }

    echo(json_encode($tweets));

}
?>
