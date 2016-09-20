// $(document).ready(function(){
//   console.log("en el registro")
//     var url = "https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/";
//     var posturl = "?api_key=RGAPI-1AF0CE56-4B91-4D73-B4C7-C9F419011E1C";
//     $('#new_sumoner').submit(function(e) {
//         e.preventDefault(); 
//         var summonerName = $('#user_name').val();       
//        $.ajax({
//            type: "GET",
//            url: "" + url + summonerName + posturl,
//            success: function(response){
//             console.log(response)
//             $("#new_sumoner").submit()
//            // summonerId = response[summonerName].id;
//            // console.log(summonerId);
//            // $.ajax({
//            //     type: "GET",
//            //     url: "https://euw.api.pvp.net/api/lol/euw/v2.5/league/by-summoner/"+ summonerId +"/entry" + posturl,  
//            //     success: function(response){
                   

//            //         $("#new_sumoner").submit()
//            //         // console.log(response[summonerId][0].tier);
//            //         // summonerTier = response[summonerId][0].tier;
//            //         // console.log(summonerTier);
//            //         // if(summonerTier === ("GOLD" ||  "DIAMOND" || "PLATINUM") ){

//            //         // // if(summonerTier==="GOLD" ||"PLATINUM"||"DIAMOND"){
//            //         //     console.log("funciona");
//            //         // }else{
//            //         //     console.log("you don´t have enough level")

//            //         // }
//            //     },
//            //     error: function (){
//            //      console.log("sumoner not found")
//            //     }
//            // });
//          },
//          error: function(){
//              console.log("this summoner id doesn´t exist ")

//          }

//        })
//     });
// })

// $(document).ready(function() {
//     $('new_sumoner').submit(function(e) {
//         e.preventDefault();
//         var url = "https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/";
//         var posturl = "?api_key=RGAPI-1AF0CE56-4B91-4D73-B4C7-C9F419011E1C";
//         $.ajax({
//             url: "" + url + summonerName + posturl,
//             type: 'get',
//             data: $('new_sumoner').serialize(),
//             success: function(data) {
//                 if (data == 'true')
//                 {
//                     $('new_sumoner').unbind('submit').submit();
//                 }
//                 else
//                 {
//                     alert('Your username/password are incorrect');
//                 }
//             },
//             error: function() {
//                 alert('There has been an error, please alert us immediately');
//             }
//         });
//     });
// });

// $(document).ready(function() {
//     var testing = false;
//     $('new_sumoner').submit(function(e) {
//          e.preventDefault();
//          var url = "https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/";
//          var posturl = "?api_key=RGAPI-1AF0CE56-4B91-4D73-B4C7-C9F419011E1C";
//         $.ajax({
//             url: "" + url + summonerName + posturl,
//             type: 'get',
//             data: $('new_sumoner').serialize(),
//             async: false,
//             success: function(data) { 
//                     testing = true;
//                     // $('form').attr('action', 'https://example.com');
//                     $('new_sumoner').submit();
//             },
//             error: function() {
//                 alert('There has been an error, please alert us immediately');
//             }
//         });

//         return testing;
//     });
// });

$(document).ready(function(){
    var url = "https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/";
    var posturl = "?api_key=RGAPI-1AF0CE56-4B91-4D73-B4C7-C9F419011E1C";

    $('#new_sumoner').on('submit', function(e) {
      e.preventDefault();
      var summonerName = $('#user_name').val();
      console.log("prueba");
      var self = this;
       
      $.ajax({
        type: "GET",
        url: url + summonerName + posturl,
        success: function(response){
            console.log(response);

            self.submit();
        // $.ajax({
        //   type: "GET",
        //   url: "https://euw.api.pvp.net/api/lol/euw/v2.5/league/by-summoner/"+ summonerId +"/entry" + posturl,  
        //   success: function(response){     
        //     console.log(response[summonerId][0].tier);
        //     summonerTier = response[summonerId][0].tier;
        //     console.log(summonerTier);
        //     if(summonerTier === ("GOLD" ||  "DIAMOND" || "PLATINUM") ){
        //       console.log("funciona");
        //       
        //       // $('#user_new').submit();
        //     }else{
        //       console.log("you don´t have enough level")
        //     }
        //   },
        //   error: function (){
        //   }
        // });
        },
        error: function(){
          console.log("this summoner id doesn´t exist ")
        }
      })
    });
})
