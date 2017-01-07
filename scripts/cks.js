const _ = require('lodash');
const fs = require('fs');


const naIDArray = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"1171117",null,"2203059",null,null,"4560860",null,"23873835",null,"23873831",null,"4683924",null,"2326628",null,"2593108",null,"2593107",null,"23875013",null,"5019422",null,"2164039",null,"6159083",null,"23873830",null,"1771842",null,"4739857",null,"1771841",null,"1771840",null,"2159430",null,"2159419",null,"6254756",null,"2538452",null,"6282610",null,"6279897",null,"6708542",null,"6120116",null,"6282811",null,"2363845",null,"956350",null,"575565",null,"6883361",null,"7283423",null,"7282590",null,"6207540",null,"6924359",null,"6924334",null,"6924321",null,"6924302",null,"6924296",null,"7283759",null,"7283717",null,"7283313",null,"7282873",null,"6924293",null,"6924260",null,"7282798",null,"26272569",null,"7283457",null,"6924370",null,"6924243",null,"7283585",null,"7283096",null,"7282692",null,"7282769",null,"6924348",null,"5890489",null,"7283321",null,"7283227",null,"7282726",null,"7283475",null,"12028862",null,"5890518",null,"7283203",null,"6924329",null,"19076538",null,"26223550",null,"7283163",null,"26244604",null,"19042439",null,"5890485",null,"20092671",null,"20091331",null,"5890520",null,"24461636",null,"26298485",null,null,null,null,null,null,null,null,null,null,null,null];


const naIds = _.compact(naIDArray);
const naIdJSON = naIds.map(id => ( { naId: id }));

var outputFilename = 'nara-cks.json';
        
fs.writeFile(outputFilename, JSON.stringify(naIdJSON), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + outputFilename);
    }
})