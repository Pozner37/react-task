import React, {FC} from "react";
import {Box, Fab, makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import BasicEntity from "../basicEntity/basicEntity";
import CalendarTask from "../task/CalendarTasks/CalendarTask";
import TaskFormBody from "./taskFormBody";
import EventFormBody from "./eventFormBody";
import CalendarEvent from "../event/CalendarEvent/CalendarEvent";

interface EditFormProps {
    item: BasicEntity | undefined
}

const EditForm: FC<EditFormProps> = ({item}) => {
    const classes = useStyles();
    const formBody = () => {
      if(item instanceof CalendarTask) {
          return <TaskFormBody item={item}></TaskFormBody>;
      }  else if (item instanceof CalendarEvent){
          return <EventFormBody item={item}></EventFormBody>;
      }
    };
    return (
        <>
            <Box className={classes.box}>
                <Link to="/"><Fab className={classes.fab}><HomeIcon/></Fab></Link>
            </Box>
            {formBody()}
        </>
    );
}

const useStyles = makeStyles({
    fab: {
        left: "48%"
    },
    box: {
        padding: '10px'
    }
});

export default EditForm;
