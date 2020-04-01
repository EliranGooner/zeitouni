import React from 'react';
import styles from './article-card.module.scss';
import Card from 'react-bootstrap/Card';

const ProjectCard = ({header, preview, src, path, idx}) => {

  return (
    <div className={styles.card}>
      <a href={path} alt='article'>
        <Card
          bg='secondary'
          key={idx}
          text={'white'}
          style={{ width: '18rem', height: '18rem' }}
        >
          <Card.Header>{src}</Card.Header>
          <Card.Body>
            <Card.Title>{header}</Card.Title>
            <Card.Text>
              {preview}
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    </div>
  )
}

export default ProjectCard