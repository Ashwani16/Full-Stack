export default function ({data,onDelete,loading }){
    return <>
        {loading && <h2>...loading</h2>}
        <table>
            <thead><tr>
                <th>
                name
            </th>
            <th>
                age
            </th>
            <th>
                Departement
            </th>
            <th>
                Salary
            </th>
            <th>
                Marital Status
            </th>
            
            <th>
            address
            </th>
            <th>
                Delete
            </th>
            </tr>
            </thead>
            <tbody>
            {data.map(({name,address,age,department,id,img,ismaried,salary})=>{
                return <tr key={id}><td style={{display:"flex"}}>
                    <img src={img} width="20%"/>
                    {name}
                </td>
                <td>
                    {age}
                </td>
                <td>
                    {department}
                </td>
                <td>
                    {salary}
                </td>
                <td>
                    {ismaried}
                </td>
                <td>
                    {address}
                </td>
                <td onClick={()=>{
                     console.log("DELETE",id)
                    onDelete(id)
                   
                }}>
                    DELETE
                </td>

                </tr>
            
            })}
            </tbody>
        </table>
        </>
    
}