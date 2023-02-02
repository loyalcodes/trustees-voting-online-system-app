import SkeletonLoader from "expo-skeleton-loader"
import { Dimensions } from "react-native";
import Colors from "../constants/Colors";

export const UserInfoLoader = () =>{
    const screenWidth = Dimensions.get('window').width;

    return(
      <SkeletonLoader 
      boneColor={Colors.light.smoke} 
      highlightColor={Colors.light.lightGray}
      style={{marginTop:60, alignSelf:"center", width: "100%"}}>
      <SkeletonLoader.Container style={[{ }]} >

      <SkeletonLoader.Container style={{ paddingVertical: 10, width: "100%", alignSelf:"center"}}>
      
      <SkeletonLoader.Item
          style={{ width: 100, height: 8, marginLeft:15, borderRadius: 80, alignSelf: "center" }}
      />
      <SkeletonLoader.Item
          style={{ width: 200, height: 6, marginBottom: 5, marginLeft:15, marginTop:10, borderRadius:80, alignSelf: "center" }}
      />
      
      <SkeletonLoader.Item
          style={{ width: 90, height: 4, marginBottom: 5, marginTop:5, marginLeft:15, borderRadius:80, alignSelf: "center" }}
      />

      </SkeletonLoader.Container>



      <SkeletonLoader.Container style={{ paddingVertical: 30, justifyContent: "space-between", flexDirection: "row", width: "96%"}}>

      <SkeletonLoader.Container style={{}}>
      
      <SkeletonLoader.Item
          style={{ width: 20, height: 5, marginLeft:15, borderRadius: 80, alignSelf: "center"}}
      />
      <SkeletonLoader.Item
          style={{ width: 60, height: 5, marginLeft:15, marginTop:10, borderRadius:80, alignSelf: "center" }}
      />

      </SkeletonLoader.Container>

      <SkeletonLoader.Container style={{}}>
      
      <SkeletonLoader.Item
          style={{ width: 20, height: 5, marginLeft:15, borderRadius: 80, alignSelf: "center"}}
      />
      <SkeletonLoader.Item
          style={{ width: 60, height: 5, marginLeft:15, marginTop:10, borderRadius:80, alignSelf: "center" }}
      />

      </SkeletonLoader.Container>

      <SkeletonLoader.Container style={{ }}>
      
      <SkeletonLoader.Item
          style={{ width: 20, height: 5, marginLeft:15, borderRadius: 80, alignSelf: "center"}}
      />
      <SkeletonLoader.Item
          style={{ width: 60, height: 5, marginLeft:15, marginTop:10, borderRadius:80, alignSelf: "center" }}
      />

      </SkeletonLoader.Container>




      </SkeletonLoader.Container>

      



</SkeletonLoader.Container>
</SkeletonLoader>
    )
}



export const UserLoader = () =>{
  const screenWidth = Dimensions.get('window').width;

  return(
    <SkeletonLoader 
    boneColor={Colors.light.smoke} 
    highlightColor={Colors.light.lightGray}
    style={{marginTop:0, alignSelf:"center", width: "100%"}}>
    <SkeletonLoader.Container style={[{ }]} >

    <SkeletonLoader.Container style={{ paddingVertical: 10, width: "100%", alignSelf:"center"}}>
    
    <SkeletonLoader.Item
        style={{ width: 100, height: 8, marginLeft:15, borderRadius: 80, alignSelf: "center" }}
    />
    <SkeletonLoader.Item
        style={{ width: 200, height: 6, marginBottom: 5, marginLeft:15, marginTop:10, borderRadius:80, alignSelf: "center" }}
    />
    
    <SkeletonLoader.Item
        style={{ width: 90, height: 4, marginBottom: 5, marginTop:5, marginLeft:15, borderRadius:80, alignSelf: "center" }}
    />

    </SkeletonLoader.Container>



    <SkeletonLoader.Container style={{ paddingVertical: 30, justifyContent: "space-between", flexDirection: "row", width: "96%"}}>

    <SkeletonLoader.Container style={{}}>
    
    <SkeletonLoader.Item
        style={{ width: 20, height: 5, marginLeft:15, borderRadius: 80, alignSelf: "center"}}
    />
    <SkeletonLoader.Item
        style={{ width: 60, height: 5, marginLeft:15, marginTop:10, borderRadius:80, alignSelf: "center" }}
    />

    </SkeletonLoader.Container>

    <SkeletonLoader.Container style={{}}>
    
    <SkeletonLoader.Item
        style={{ width: 20, height: 5, marginLeft:15, borderRadius: 80, alignSelf: "center"}}
    />
    <SkeletonLoader.Item
        style={{ width: 60, height: 5, marginLeft:15, marginTop:10, borderRadius:80, alignSelf: "center" }}
    />

    </SkeletonLoader.Container>

    <SkeletonLoader.Container style={{ }}>
    
    <SkeletonLoader.Item
        style={{ width: 20, height: 5, marginLeft:15, borderRadius: 80, alignSelf: "center"}}
    />
    <SkeletonLoader.Item
        style={{ width: 60, height: 5, marginLeft:15, marginTop:10, borderRadius:80, alignSelf: "center" }}
    />

    </SkeletonLoader.Container>




    </SkeletonLoader.Container>

    



</SkeletonLoader.Container>
</SkeletonLoader>
  )
}


export const MultiListItemAnimation = () =>{
  const screenWidth = Dimensions.get('window').width;

  return(
      <SkeletonLoader 
      boneColor={Colors.light.smoke} 
      highlightColor={Colors.light.lightGray}
      style={{marginTop:10, flex: 1}}>
      <SkeletonLoader.Container style={[{ flex: 1}]} >


    <SkeletonLoader.Container style={{ paddingVertical: 10, flexDirection: "row"}}>

    <SkeletonLoader.Item
        style={{ width: 60, height: 60, marginLeft:15, borderRadius: 50, backgroundColor: Colors.light.smoke, alignSelf: "center" }}
      />

<SkeletonLoader.Container style={{alignSelf: "center"}}>
      
      <SkeletonLoader.Item
        style={{ width: 90, height: 8, marginLeft:15, borderRadius: 80 }}
      />
      <SkeletonLoader.Item
        style={{ width: 250, height: 8, marginBottom: 5, marginLeft:15, marginTop:10, borderRadius:80 }}
      />
      <SkeletonLoader.Item
        style={{ width: 250, height: 8, marginBottom: 5, marginLeft:15, marginTop:10, borderRadius:80 }}
      />
      <SkeletonLoader.Item
        style={{ width: 90, height: 5, marginBottom: 5, marginTop:5, marginLeft:15, borderRadius:80  }}
      />
</SkeletonLoader.Container>
    </SkeletonLoader.Container>



    <SkeletonLoader.Container style={{ paddingVertical: 10, flexDirection: "row"}}>

<SkeletonLoader.Item
    style={{ width: 60, height: 60, marginLeft:15, borderRadius: 50, backgroundColor: Colors.light.smoke, alignSelf: "center" }}
  />

<SkeletonLoader.Container style={{alignSelf: "center"}}>
  
  <SkeletonLoader.Item
    style={{ width: 90, height: 8, marginLeft:15, borderRadius: 80 }}
  />
  <SkeletonLoader.Item
    style={{ width: 250, height: 8, marginBottom: 5, marginLeft:15, marginTop:10, borderRadius:80 }}
  />
  <SkeletonLoader.Item
    style={{ width: 250, height: 8, marginBottom: 5, marginLeft:15, marginTop:10, borderRadius:80 }}
  />
  <SkeletonLoader.Item
    style={{ width: 90, height: 5, marginBottom: 5, marginTop:5, marginLeft:15, borderRadius:80  }}
  />
</SkeletonLoader.Container>
</SkeletonLoader.Container>


<SkeletonLoader.Container style={{ paddingVertical: 10, flexDirection: "row"}}>

    <SkeletonLoader.Item
        style={{ width: 60, height: 60, marginLeft:15, borderRadius: 50, backgroundColor: Colors.light.smoke, alignSelf: "center" }}
      />

<SkeletonLoader.Container style={{alignSelf: "center"}}>
      
      <SkeletonLoader.Item
        style={{ width: 90, height: 8, marginLeft:15, borderRadius: 80 }}
      />
      <SkeletonLoader.Item
        style={{ width: 250, height: 8, marginBottom: 5, marginLeft:15, marginTop:10, borderRadius:80 }}
      />
      <SkeletonLoader.Item
        style={{ width: 250, height: 8, marginBottom: 5, marginLeft:15, marginTop:10, borderRadius:80 }}
      />
      <SkeletonLoader.Item
        style={{ width: 90, height: 5, marginBottom: 5, marginTop:5, marginLeft:15, borderRadius:80  }}
      />
</SkeletonLoader.Container>
    </SkeletonLoader.Container>


    <SkeletonLoader.Container style={{ paddingVertical: 10, flexDirection: "row"}}>

    <SkeletonLoader.Item
        style={{ width: 60, height: 60, marginLeft:15, borderRadius: 50, backgroundColor: Colors.light.smoke, alignSelf: "center" }}
      />

<SkeletonLoader.Container style={{alignSelf: "center"}}>
      
      <SkeletonLoader.Item
        style={{ width: 90, height: 8, marginLeft:15, borderRadius: 80 }}
      />
      <SkeletonLoader.Item
        style={{ width: 250, height: 8, marginBottom: 5, marginLeft:15, marginTop:10, borderRadius:80 }}
      />
      <SkeletonLoader.Item
        style={{ width: 250, height: 8, marginBottom: 5, marginLeft:15, marginTop:10, borderRadius:80 }}
      />
      <SkeletonLoader.Item
        style={{ width: 90, height: 5, marginBottom: 5, marginTop:5, marginLeft:15, borderRadius:80  }}
      />
</SkeletonLoader.Container>
    </SkeletonLoader.Container>


    <SkeletonLoader.Container style={{ paddingVertical: 10, flexDirection: "row"}}>

    <SkeletonLoader.Item
        style={{ width: 60, height: 60, marginLeft:15, borderRadius: 50, backgroundColor: Colors.light.smoke, alignSelf: "center" }}
      />

<SkeletonLoader.Container style={{alignSelf: "center"}}>
      
      <SkeletonLoader.Item
        style={{ width: 90, height: 8, marginLeft:15, borderRadius: 80 }}
      />
      <SkeletonLoader.Item
        style={{ width: 250, height: 8, marginBottom: 5, marginLeft:15, marginTop:10, borderRadius:80 }}
      />
      <SkeletonLoader.Item
        style={{ width: 250, height: 8, marginBottom: 5, marginLeft:15, marginTop:10, borderRadius:80 }}
      />
      <SkeletonLoader.Item
        style={{ width: 90, height: 5, marginBottom: 5, marginTop:5, marginLeft:15, borderRadius:80  }}
      />
</SkeletonLoader.Container>
    </SkeletonLoader.Container>



  </SkeletonLoader.Container>
</SkeletonLoader>
  )
}





export const ListItemAnimation = () =>{
    const screenWidth = Dimensions.get('window').width;

    return(
        <SkeletonLoader 
        boneColor={Colors.light.smoke} 
        highlightColor={Colors.light.lightGray}
        style={{marginTop:10, flex: 1}}>
        <SkeletonLoader.Container style={[{ flex: 1}]} >


      <SkeletonLoader.Container style={{ paddingVertical: 10, flexDirection: "row"}}>

      <SkeletonLoader.Item
          style={{ width: 60, height: 60, marginLeft:15, borderRadius: 50, backgroundColor: Colors.light.smoke, alignSelf: "center" }}
        />

<SkeletonLoader.Container style={{alignSelf: "center"}}>
        
        <SkeletonLoader.Item
          style={{ width: 90, height: 8, marginLeft:15, borderRadius: 80 }}
        />
        <SkeletonLoader.Item
          style={{ width: 250, height: 8, marginBottom: 5, marginLeft:15, marginTop:10, borderRadius:80 }}
        />
        <SkeletonLoader.Item
          style={{ width: 250, height: 8, marginBottom: 5, marginLeft:15, marginTop:10, borderRadius:80 }}
        />
        <SkeletonLoader.Item
          style={{ width: 90, height: 5, marginBottom: 5, marginTop:5, marginLeft:15, borderRadius:80  }}
        />
</SkeletonLoader.Container>
      </SkeletonLoader.Container>

    </SkeletonLoader.Container>
  </SkeletonLoader>
    )
}



export const TwoLineAnimation = () =>{
  const screenWidth = Dimensions.get('window').width;

  return(
      <SkeletonLoader 
      boneColor={Colors.light.smoke} 
      highlightColor={Colors.light.lightGray}
      style={{marginTop:10, flex: 1}}>
      <SkeletonLoader.Container style={[{ flex: 1}]} >


      <SkeletonLoader.Container style={{}}>
      
      <SkeletonLoader.Item
        style={{ width: 100, height: 3, marginLeft:15, borderRadius: 80 }}
      />
      <SkeletonLoader.Item
        style={{ width: 250, height: 3, marginBottom: 5, marginLeft:15, marginTop:10, borderRadius:80 }}
      />
      
</SkeletonLoader.Container>

  </SkeletonLoader.Container>
</SkeletonLoader>
  )
}