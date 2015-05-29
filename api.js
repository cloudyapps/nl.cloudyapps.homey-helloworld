module.exports = [
    
    {
        description:	'Get someting',
        method: 		'GET',
        path:			'/',
        fn: function( callback, args ){
            var result = this.getSomething();
            callback( result );
        }
    },
    
    {
        description:	'Add something new',
        method: 		'POST',
        path:			'/',
        fn: function( callback, args ){
            var result = this.addSomething();
            callback( result );
        }
    },
    
    {
        description:	'Update something',
        method: 		'PUT',
        path:			'/:id',
        fn: function( callback, args ){
            var result = this.updateSomething( args.params.id );
            callback( result );
        }
    },
    
    {
        description:	'Delete something',
        method: 		'DELETE',
        path:			'/:id',
        fn: function( callback, args ){
            var result = this.deleteSomething( args.params.id );
            callback( result );
        }
    }	 
];