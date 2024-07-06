import * as React from 'react';
import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { useNavigate } from 'react-router-dom';




export default function SelectedTreeView(props:any) {
    const navigate = useNavigate();
    const {drawerItems} = props;
    const randomid = () => {
        let id = Math.random().toString().slice(2);
        return id;
      };
  return (
    <Box sx={{ minHeight: 352, minWidth: 250 }}>
      <SimpleTreeView>

        {drawerItems.length > 0 && drawerItems.map((drawerItem:any,i:number) => <TreeItem itemId={drawerItem.NodeName} label={drawerItem.NodeName}>
            {drawerItem.children.length > 0 && drawerItem.children.map((child:any,index:number) =><TreeItem itemId={randomid()} label={child.name} onClick={()=>navigate(`/${child.path}`)}/>
            )}
          
          
        </TreeItem>
        )}
        
     
      </SimpleTreeView>
    </Box>
  );
}
