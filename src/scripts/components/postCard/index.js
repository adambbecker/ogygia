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
var PostMetaItem = require( './postMetaItem' ).reactClass;

// ---- Styles ----
var projectVars = require( '../../vars' );
var typographyStyles = require( '../demos/typography' ).styles;
var cardStyles = {
  base: {
    width: '100%',
    maxWidth: '656px',
    backgroundColor: '#FFFFFF',
    padding: '16px',
    border: 'solid 1px #C8D7E1'
  },
  small: {
    maxWidth: '304px'
  },
  postTitle: merge(
    typographyStyles.managePostTitle,
    {
      marginBottom: '9px'
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
      color: projectVars.colors.textLight,
      marginBottom: '14px'
    },
    item: {
      display: 'inline-block',
      marginRight: '16px'
    }
  },
  postMeta: {
    base: {
      display: 'flex',
      width: '100%'
    },
    item: {
      flex: '1 0 auto',
      width: '0',
      textAlign: 'center'
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
      },
      meta: {
        reblogs: 2,
        reblogged: false,
        comments: 6,
        commented: false,
        likes: 12,
        liked: false
      }
    };
  },

  render: function() {
    var renderedBaseStyles = merge(
      cardStyles.base,
      this.props.size === 'small' && cardStyles.small
    );

    return (
      <article style={ renderedBaseStyles }>
        <PostAttribution avatarURL={ this.props.author.avatarURL } name={ this.props.author.name } />
        <h3 style={ cardStyles.postTitle }>{ this.props.title }</h3>
        <p style={ cardStyles.postBody }>{ this.props.body }</p>
        <ul style={ cardStyles.postInfo.base }>
          <li style={ cardStyles.postInfo.item }>{ this.props.info.date }</li>
          <li style={ cardStyles.postInfo.item }>{ this.props.info.tags }</li>
        </ul>
        <ul style={ cardStyles.postMeta.base }>
          <PostMetaItem type="reblog" number={ this.props.meta.reblogs } active={ this.props.meta.reblogged } style={ cardStyles.postMeta.item } />
          <PostMetaItem type="comment" number={ this.props.meta.comments } active={ this.props.meta.commented } style={ cardStyles.postMeta.item } />
          <PostMetaItem type="like" number={ this.props.meta.likes } active={ this.props.meta.liked } style={ cardStyles.postMeta.item } />
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
