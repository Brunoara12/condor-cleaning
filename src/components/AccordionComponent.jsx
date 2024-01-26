import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import PropTypes from 'prop-types';

const AccordionComponent = ({ question, answer, ind }) => {
  return (
    <Accordion className='items-center'>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${ind}a-content`}
        id={`panel${ind}a-header`}
        className='font-bold'
      >
        {question}
      </AccordionSummary>
      <AccordionDetails align='left'>
        {answer}
      </AccordionDetails>
    </Accordion>
  )
}

AccordionComponent.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  ind: PropTypes.number
}

export default AccordionComponent