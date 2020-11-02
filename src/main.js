import App from './App.svelte';

function animateStars ( starFieldWidth, speed ) {
	var starField = document.getElementById( "star-field" );
	var stars = starField.childNodes;

	function getStarDistance ( i ) {
		if ( i % 9 == 0 ) return "near";
		else if ( i % 2 == 0 ) return "far";
		else return "";
	}

	setInterval( () => {
		for ( var i = 1;i < stars.length;i++ ) {
			stars[ i ].className = "star" + getStarDistance( i );

			var currentTop = parseInt( stars[ i ].style.top );
			var currentLeft = parseInt( stars[ i ].style.left );
			var leftChangeAmount = speed;
			var topChangeAmount = speed;
			var leftDiff, topDiff;
			topDiff = currentTop - topChangeAmount + ( currentTop - topChangeAmount < 10 ? starFieldHeight : 0 )
			leftDiff = currentLeft - leftChangeAmount + ( currentLeft - leftChangeAmount < 10 ? starFieldWidth : 0 )
			stars[ i ].style.left = leftDiff + "px";
			stars[ i ].style.top = topDiff + "px";
		}
	}, 40 );
}

const addStars = ( starFieldWidth, starFieldHeight, noOfStars ) => {
	const starField = document.getElementById( "star-field" );

	for ( let i = 0;i < noOfStars;i++ ) {
		var star = document.createElement( "div" );
		star.className = "star";
		star.style.top = Math.floor( Math.random() * starFieldHeight + 1 ) + "px";
		star.style.left = Math.floor( Math.random() * starFieldWidth + 1 ) + "px";
		starField.appendChild( star );
	}
};

const starFieldWidth = window.innerWidth;
const starFieldHeight = window.innerHeight;

addStars( starFieldWidth, starFieldHeight, 4 * ( starFieldHeight * starFieldWidth ) ** 0.25 );
animateStars( starFieldWidth, 1 );

const app = new App( {
	target: document.getElementsByTagName( 'main' )[ 0 ]
} );

export default app;