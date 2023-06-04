import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import "./muiAccordion.scss"

const MuiAccordion = () => {
  return (
    <div className="muiAccordion">
      <h2>Explore options near me</h2>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Popular cuisines near me</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span>Bakery food near me</span>
            <span>Beverages food near me</span>
            <span>Biryani food near me</span>
            <span>Burger food near me</span>
            <span>Chinese food near me</span>
            <span>Desserts food near me Ice</span>
            <span>Cream food near me</span>
            <span>Italian food near me</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Popular restaurant types near me</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span>Bakeries near me</span>
            <span>Bars near me Beverage Shops near me</span>
            <span>Bhojanalya near me</span>
            <span>Cafés near me</span>
            <span>Casual Dining near me</span>
            <span>Clubs near me</span>
            <span>Cocktail Bars near me</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Top Restaurant Chains</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span>Bikanervala</span>
            <span>Biryani Blues</span>
            <span>Burger King</span>
            <span>Domino&apos;s</span>
            <span>Dunkin&apos; Donut</span>
            <span>KFC</span>
            <span>Krispy Kreme</span>
            <span>McDonald&apos;s</span>
            <span>Pizza Hut </span>
            <span>WOW! Momo</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Cities We Deliver To</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span>Delhi NCR</span>
            <span>Kolkata</span>
            <span>Mumbai</span>
            <span>Bengaluru</span>
            <span>Pune</span>
            <span>Hyderabad</span>
            <span>Chennai</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MuiAccordion
