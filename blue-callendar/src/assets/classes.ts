import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    bold: {
        fontWeight: 'bold',
    },
    table: {
        width: '60%',
    },
    sideBorderTableCell: {
        borderBottom: "none",
        borderRight: "1px solid lightGrey",
        borderLeft: "1px solid lightGrey"
    },
    borderlessTableCell: {
        borderBottom: "none",
    },
});

export default useStyles;