var caluclater = new Vue({
    el:'#caluclater',
    data:{
        text1:'',
        text2:''
    },
    methods:{
        add_text: function(num){
            this.text2 = ''
            this.text1 += num;
        },
        clear: function(){
            this.text1 = '';
            this.text2 = "";
        },
        cal:function(){
            numList = [];
            symbolList = [];
            num = "";
            for(let i = 0; i < this.text1.length; i++){
                if(this.text1.charAt(i) == '+' || this.text1.charAt(i) == '*' || this.text1.charAt(i) == '-'  || this.text1.charAt(i) == '/' ){
                    numList.push(parseInt(num));
                    num = "";
                    symbolList.push(this.text1.charAt(i));
                }
                else num += this.text1.substring(i,i+1);
            }
            numList.push(parseInt(num));
            if(numList.length==1)return numList[0];
            stack = [];
            stack.push(numList[0]);
            for(let j = 0; j < symbolList.length; j++){
                if(symbolList[j] == '+') stack.splice(0,0,numList[j+1]);
                else if(symbolList[j] == '*') stack[0] = stack[0] * numList[j+1];
                else if(symbolList[j] == '/') stack[0] = Math.floor(stack[0] / numList[j+1]);
                else stack.splice(0,0,numList[j+1]*-1);
                }
            console.log(stack);
            answer = 0;
            for(let k = 0; k < stack.length; k++) answer += stack[k];
            this.text2 = answer;
        },
        del(){
            this.text1 = this.text1.substring(0,this.text1.length-1);
        }
        
    }
})