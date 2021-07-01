import React from 'react';
import Card from './Card'

const Cardlist = ({ list }) => {
    return(
        <div>
            {list.map((user) => {
                    return(
                    <Card 
                        key={user.id}
                        ind={user.id}
                        name={user.name}
                        email={user.email}
                    />)
                }
            )}
        </div>
    );
}

export default Cardlist;