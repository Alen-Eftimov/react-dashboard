import React from 'react';
import { Card, Descriptions, Divider, List, Button } from 'antd';
import dishes from '../../../src/assets/data/dishes.json';
import '../../index.css'
import { useParams } from 'react-router-dom';

const DetailedOrder = () => {
    const {id} = useParams();
    return (
        <Card title={`Order ${id}`} style={{margin: 20}}>
            <Descriptions bordered column={{  lg: 1, md: 1, sm: 1 }}>
            <Descriptions.Item label="Customer">Alen</Descriptions.Item>     
            <Descriptions.Item label="Address">Street,City, Country</Descriptions.Item>                     
            </Descriptions>
            <Divider />
            <List
            dataSource={dishes}
            renderItem={(dishItem) => (
            <List.Item>
                <div style={{fontWeight: 'bold'}}>{dishItem.name} x{dishItem.quantity}</div>
                <div>€{dishItem.price}</div>
            </List.Item>
            )}
            />
            <Divider />
            <div style={styles.totalSumContainer}>
            <div>Total:</div>
            <div style={styles.totalPrice}>€ 51.36</div>
            </div>
            <Divider />
            <div style={styles.buttonsContainer}>
            <Button block type="danger" size="large" style={styles.button}>
                Decline Order
            </Button>
            <Button block type="primary" size="large" style={styles.button}>
                Accept Order
            </Button>
            </div>
            <div  style={{ paddingRight: 20, paddingLeft: 20}}>
            <Button block type="primary" size="large">
                Food is Done
            </Button>
            </div>        
        </Card>
    )
}

const styles= {
    totalSumContainer: {
      flexDirection: 'row',
      display: 'flex',
    },
    totalPrice: {
      marginLeft: 'auto',
      fontWeight: 'bold'
    },
    buttonsContainer: {
      display: 'flex',
      paddingBottom: 30,
    },
    button: {
      marginRight: 20,
      marginLeft: 20,
    },
  }

export default DetailedOrder;