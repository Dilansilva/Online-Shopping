import React,{useState,useEffect} from 'react';

import {Card,Button} from 'react-bootstrap';
import GradeIcon from '@material-ui/icons/Grade';//star icon

const Product = (props) => {


    const [star,setStar] = useState(<div>
                                        <GradeIcon/><GradeIcon/>
                                    </div>);

        useEffect(() => {
            ratings();
        },[props.ratings])

    const ratings = () => {//function for ratings
        if(props.ratings === 1){//when the rarings are 1
            setStar(<div>
                <GradeIcon/>
            </div>);
        } else if(props.ratings === 2){//when the ratings are 2
            setStar(<div>
                <GradeIcon/><GradeIcon/>
            </div>);
        } else if(props.ratings === 3){//when the rarings are 3
            setStar(<div>
                <GradeIcon/><GradeIcon/><GradeIcon/>
            </div>);
        } else if(props.ratings === 4){//when the ratings are 4
            setStar(<div>
                <GradeIcon/><GradeIcon/><GradeIcon/><GradeIcon/>
            </div>);
        } else{//when the ratings are 5
            setStar(<div>
                <GradeIcon/><GradeIcon/><GradeIcon/><GradeIcon/><GradeIcon/>
            </div>);
        }

    }

    return (  
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                <Card.Title>${props.price}</Card.Title>
                    <Card.Text>
                       {props.details}
                    </Card.Text>
                    <Card.Text>
                        {star}{/* //ratings state */}
                    </Card.Text>
                        <Button variant="primary">Add To Cart</Button>
                    </Card.Body>
            </Card>
        </div>
    );
}



export default Product;