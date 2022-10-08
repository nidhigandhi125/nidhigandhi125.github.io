import React from 'react';
import './tag.css';
import { TagCloud } from 'react-tagcloud'


const data = [
    { value: 'JavaScript', count: 38 },
    { value: 'React', count: 30 },
    { value: 'PHP', count: 28 },
    { value: 'Leadership', count: 15 },
    { value: 'Laravel', count: 23 },
    { value: 'HTML5', count: 33 },
    { value: 'Tailwind', count: 22 },
    { value: 'Adaptability', count: 10 },
    { value: 'CSS3', count: 38 },
    { value: 'Python', count: 20 },
    { value: 'Flask', count: 32 },
    { value: 'MySQL', count: 30 },
    { value: 'Team Work', count: 10 },
    { value: 'WordPress', count: 22 },
    { value: 'Git', count: 38 },
    { value: 'Adobe XD', count: 30 },
    { value: 'Creativity', count: 10 },
    { value: 'API', count: 28 },
    { value: 'User Experience', count: 32 },
    { value: 'Critical Thinking', count: 15 },
    { value: 'User Interface', count: 25 },
    { value: 'Innovative', count: 10 },
    { value: 'JQuery', count: 20 },
    { value: 'Wireframing', count: 30 },
    { value: 'C#', count: 30 },
    { value: 'Presentation skills', count: 15 },
  ]
  
  const options = [{
    luminosity: 'bright',
    hue: 'red',
  },
  {
    luminosity: 'light',
    hue: 'green'
  },
  {
    luminosity: 'bright',
    hue: 'blue'
  },
  {
    luminosity: 'bright',
    hue: 'yellow'
  },
]

// const hover =  (
//     <span 
//       style={{
//         animation: 'blinker 3s linear infinite',
//         animationDelay: `${Math.random() * 1}s`,
//         fontSize: `${size / 15}em`,
//         color: {options},
//         margin: '3px',
//         padding: '7px',
//         display: 'inline-block',

        
  //     }}>
  //   </span>
  // )
  
  const Tag = () => {
    return(
        <section id="tag-cloud">
        <h5>The Skills I Have</h5>
        <h2>My Experiences</h2>
        <div className='tagcontainer'>
          <div className='tagcloud'>
            <TagCloud
            tags={ data} 
              minSize={15}
              maxSize={45}
              shuffle={false}
              style={{
                  textAlign: 'center',
                  padding: '10px',  
                  margin: '3px',              
              }}
              />
          </div>
        </div>
        </section>
  )
}

  export default Tag