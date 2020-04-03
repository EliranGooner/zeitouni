import React from 'react';
import styles from './article-card.module.scss';
import Card from 'react-bootstrap/Card';
import difference from '../downloads/difference.pdf'
import frontman from '../downloads/frontman.pdf'
import last_resort from '../downloads/last_resort.pdf'
import the_city from '../downloads/the_city.pdf'
import where from '../downloads/where.pdf'

const ProjectCard = ({header, preview, src, path, idx}) => {

  const articles = {
    "8": where,
    "9": frontman,
    "10": last_resort,
    "11": the_city,
    "12": difference
  }

  const indexes = Object.keys(articles);
  const stringIndex = idx.toString();
  let currentFile;
  let download;
  if (indexes.includes(stringIndex)) {
    download = true;
    currentFile = articles[stringIndex]
  } else {
    download = false;
  };

  console.log(download);


  return (
    <div className={styles.card} itemScope itemType='https://schema.org/AnalysisNewsArticle'>
    {download ? 
      <a href={currentFile} download alt='article' >
        <Card
          bg='secondary'
          key={idx}
          text={'white'}
          style={{ width: '18rem', height: '18rem' }}
        >
          <Card.Header itemProp='publisher'>{src}</Card.Header>
          <Card.Body>
            <Card.Title itemProp='name'><strong>{header}</strong></Card.Title>
            <Card.Text>
              <span itemProp='dateline'>{preview}</span>
              <p><strong>להורדת הכתבה</strong></p>
            </Card.Text>
          </Card.Body>
        </Card>
      </a> 
      :
      <a href={path} alt='article'>
      <Card
        bg='secondary'
        key={idx}
        text={'white'}
        style={{ width: '18rem', height: '18rem' }}
      >
        <Card.Header itemProp='publisher'>{src}</Card.Header>
        <Card.Body>
          <Card.Title itemProp='name'><strong>{header}</strong></Card.Title>
          <Card.Text itemProp='dateline'>
            {preview}
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
    }
    </div>
  )
}

export default ProjectCard