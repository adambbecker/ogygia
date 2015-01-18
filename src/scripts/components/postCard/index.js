// =========================================
// PostCard.js
// ----
// Example post card (e.g. found in reader)
// =========================================

// ---- External Dependencies ----
var React = require( 'react' );
var merge = require( '../../lib/merge' );

// ---- Internal Dependencies ----
var PostAttribution = require( './postAttribution' ).reactClass;

// ---- Styles ----
var projectVars = require( '../../vars' );
var typographyStyles = require( '../demos/typography' ).styles;
var cardStyles = {
  base: {
    backgroundColor: '#FFFFFF',
    padding: '16px',
    border: 'solid 1px #C8D7E1'
  },
  postTitle: merge(
    typographyStyles.readerPostTitle,
    {
      marginBottom: '8px'
    }
  ),
  postBody: merge(
    typographyStyles.body,
    {
      marginBottom: '16px'
    }
  ),
  postInfo: {
    base: {
      fontSize: '14px',
      lineHeight: '16px',
      color: projectVars.colors.textLight
    },
    item: {
      display: 'inline-block',
      marginRight: '16px'
    }
  }
};

// ---- React Class ----
var cardClass = React.createClass( {

  displayName: 'TextInput',

  getDefaultProps: function() {
    return {
      author: {
        avatarURL: '../public/images/demo_avatar.png',
        name: 'Newgate Enterprises'
      },
      title: 'Big July earthquakes confound zany experimental vow',
      body: 'Fortunately this lovely orchid, one of the most interesting of its highly organized family, is far from rare, and where we find the rose pogonia and other bog-loving relatives growing, the calopogon usually outnumbers them all.',
      info: {
        date: '30m ago',
        tags: '#nonfiction'
      }
    };
  },

  render: function() {
    return (
      <article style={ cardStyles.base }>
        <PostAttribution avatarURL={ this.props.author.avatarURL } name={ this.props.author.name } />
        <h3 style={ cardStyles.postTitle }>{ this.props.title }</h3>
        <p style={ cardStyles.postBody }>{ this.props.body }</p>
        <ul style={ cardStyles.postInfo.base }>
          <li style={ cardStyles.postInfo.item }>{ this.props.info.date }</li>
          <li style={ cardStyles.postInfo.item }>{ this.props.info.tags }</li>
        </ul>
      </article>
    );
  }

} );

// ==== Module Export ====
module.exports = {
  styles: cardStyles,
  reactClass: cardClass
};
