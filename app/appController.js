(function ()
{
    'use strict';

    function appController( $http, $giLoad,$glk, $quixe )
    {
        var src = 'stories/glulxercise.ulx.json';
        var format = 'base64';

        $http.get( src ).then( function ( data )
        {
            $giLoad.load_run(null, data.data.base64, format);
        } );

        $quixe.on( 'ready', function() {
            console.log( 'ready fired!' );
        } );

        $quixe.on( 'put_jstring', function() {
            console.log( 'on put_jstring',arguments );
          $glk.glk_put_jstring.apply($glk,arguments);
        } );

        $quixe.on( 'put_jstring_stream', function() {
            console.log( 'on put_jstring_stream',arguments );
          $glk.glk_put_jstring_stream.apply($glk,arguments);
        } );

        $quixe.on( 'put_char', function() {
            console.log( 'on put_char',arguments );
          $glk.glk_put_char.apply($glk,arguments);
        } );

        $quixe.on( 'readline', function() {
            console.log( 'readline fired!', arguments );
        } );

        $quixe.on( 'snapshot', function() {
            console.log( 'snapshot fired!' );
        } );

        $quixe.on( 'readkey', function() {
            console.log( 'readkey fired!', arguments );
        } );
    }

    angular.module('quixeApp').controller('appController', appController);
})();
