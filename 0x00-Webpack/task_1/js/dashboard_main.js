import $ from 'jquery';
import _ from 'lodash';

const dashboard = () => {
  const app = $('#app');

  const dashboardTitle = $('<p>').text('Holberton Dashboard');
  const dashboardData = $('<p>').text('Dashboard data for the students');
  const button = $('<button>').text('Click here to get started');
  const counter = $('<p>').attr('id', 'count');
  const footer = $('<p>').text('Copyright - Holberton School');

  app.append(dashboardTitle, dashboardData, button, counter, footer);

  let count = 0;

  const updateCounter = _.debounce(() => {
    count++;
    counter.text(`${count} clicks on the button`);
  }, 500);

  button.on('click', updateCounter);
};

$(document).ready(dashboard);
