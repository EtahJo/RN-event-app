import { StyleSheet } from "react-native";
 
 
 
 
 export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333',
      //flexDirection:'row'
      //alignItems: 'center',
      //justifyContent: 'flex',
    },
    headerText:{
        color:'black',
        padding:10,
        backgroundColor:'white',
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center',
        fontSize:30,
        borderColor:'orange',
        borderWidth:5,
        marginTop:10,
       

    },
    header:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#333',
        paddingBottom: 20,
        paddingLeft:80,
        paddingRight:80,
        paddingTop:40
    },
    list:{
        flex:1,
        //paddingLeft:20,
        backgroundColor:'#333',
        paddingRight:0,
        justifyContent:'space-around',
        alignItems:'flex-start',
        borderBottomColor:'white',
        borderBottomWidth:2,
        marginLeft:40,
        marginRight:20
     

    },
    date:{
        flex:1,
        fontSize:25,
        fontWeight:'bold',
        color:'white',
        paddingBottom:10,
        paddingTop:10

    },
    title:{
        flex:1,
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        paddingBottom:10,
        borderBottomColor:'grey',
        borderBottomWidth:2,
    },
    time:{
        flex:1,
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        paddingBottom:10,
        borderBottomColor:'grey',
        borderBottomWidth:2,
    },
    place:{
        flex:1,
        fontSize: 15,
        color:'grey',
        paddingBottom:30,
        paddingTop:10
    },
    det:{
        flex:1,
        color: 'orange',
        fontSize:13,
        paddingBottom:10,
        
    },
    icon:{
        
        backgroundColor:'orange',
        maxWidth:40,
        borderRadius:20,
        alignItems:'center',
        padding:10,
        position:'absolute',
        bottom:20,
        right:25
    }
  });