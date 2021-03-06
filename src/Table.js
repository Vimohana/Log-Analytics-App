import React, { Component } from "react";
import "./Table.css";

class Table extends Component{
    
// =====================
    //          Trans   Fail
    // aug 18      22   2
    // aug 19       11  0
    // 
    
    // [{date: 11/22/19,
    //   errors: { type: , freq: ;}
    //  },
    // {
    //      date:11/23/19,
    //      errors:   {type: freq ;}
    // }]
    

    render() {
        
        return (
            <div>
            <div className="table">
                <table className="t" id="vol-table">
                    <tr>
                        <th>Type</th>
                        <th>Frequency</th>
                    </tr>
                    {this.props.total}
                      
                </table>
                </div>

                <div className="table">  
                <table className="t" id="date-table">
                    {this.props.tableHeader}
                    {this.props.byDate}                               
                </table>  
                    
                </div>

            </div>    
        );    
    }
}


export default Table;