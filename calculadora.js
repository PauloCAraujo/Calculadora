<script>
            function insert(num){
               var numero = document.getElementById('tela').innerHTML;
               document.getElementById('tela').innerHTML = numero + num;
            }

            function clean(){
                document.getElementById('tela').innerHTML = "";
            }

            function calcular(){
                var tela = document.getElementById('tela').innerHTML;
                if (tela)
                {
                    document.getElementById('tela').innerHTML = eval(tela)    
                }
                else{
                    document.getElementById('tela').innerHTML = "Nada..."
                }
            }
            function back(){
                var tela = document.getElementById('tela').innerHTML;
                document.getElementById('tela').innerHTML = tela.substring(0, tela.length -1);
            }
</script>
