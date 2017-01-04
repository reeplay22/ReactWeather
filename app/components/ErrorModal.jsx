var React = require('react');

var ErrorModal = React.createClass({

  componentDidMount: function () {
    var modal = new foundation.Reveal($('#error-modal'));
    modal.open();
  },

  render: function () {
    return (
      <div id="error-modal" className="reveal tiny tex-center" data-reveal>
        <h4>Modal Bitchhheeesss!!!!</h4>
        <p>you don fucked up son go back and try again</p>
        <p>
          <button className="button hollow" data-close> You Right!!</button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
