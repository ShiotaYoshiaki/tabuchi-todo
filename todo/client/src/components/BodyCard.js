import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

// ToDo: 関数コンポーネント、クラスコンポーネントの使い分けについて調査
// ToDo: React Hooksについて調査
function BodyCard(props) {

    return (
        <Card variant="outlined">
            <CardContent>
            <Typography>
                {props.task}
            </Typography>
            </CardContent>
            <CardActions>
              {/* ToDo: 削除機能を実装 */}
            <DeleteIcon></DeleteIcon>
            </CardActions>
        </Card>
    );
}

export default BodyCard