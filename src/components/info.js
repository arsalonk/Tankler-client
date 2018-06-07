import React from 'react';
import './info.css';

export default function Info() {
  return (
    <div className='info-container'>
      <h2>How it Works</h2>
      <section>
        <h3>Home Tab</h3>
        <p>
          The home tab is where you'll be directed to each time you login, it looks through
          all your created tasks and displays any task that is due today.
        </p>
      </section>
      <section>
        <h3>Tank Tab</h3>
        <p>
          The tank tab starts off empty and requires you to create a tank by entering your tank
          dimensions. Once you have a tank created you can add livestock from the database so keeping
          track of what you have in your tank becomes a breeze.
        </p>
      </section>
      <section>
        <h3>Tasks Tab</h3>
        <p>
          This is where you create all the recurring tasks your tank needs to stay in working
          condition. When creating tasks you're required to input the tasks name and every how many
          days youd like the task to repeat.
        </p>
      </section>
      <section>
        <h3>Parameters Tab</h3>
        <p>
          This tab allows you to keep track of your tanks parameters
        </p>
      </section>
      <section>
        <h3>Database Tab</h3>
        <p>
          You can search through the database for the specific livestock youd like to add to your tank
          and insert it in by clicking on add.
        </p>
      </section>
    </div>
  );
}