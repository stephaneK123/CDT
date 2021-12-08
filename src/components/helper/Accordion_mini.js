import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import { margin } from "@mui/system";
import { getOrCreateChat } from "react-chat-engine";
import { ChatEngineWrapper } from "react-chat-engine";

export default function SimpleAccordion({ title, people }) {
  return (
    <div>
      <Accordion style={({ backgroundColor: "grey" }, { marginBlock: "15px" })}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>

        {/* render people  */}
        <AccordionDetails>
          {people.map((item, i) => (
            <Box
              style={({ backgroundColor: "greeen" }, { marginBottom: "15px" })}
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton style={{ backgroundColor: "green" }}>
                      <ListItemIcon>
                        <EmojiPeopleIcon />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
              <Divider />
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export function SimpleAccordion2({ title, body }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{body}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
