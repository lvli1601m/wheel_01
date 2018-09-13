<template>
    <div class="wrap">
        <div>
            <input type="user" placeholder="请输入你的用户名" ref="username">
        </div>
        <div>
            <input type="password" placeholder="请输入密码" ref="password">
        </div>
        <div>
            <button @click= "login">登陆</button>
        </div>
    </div>
</template>
<script>
export default {
  methods:{ 
    login(){
        let username = this.$refs.username.value,
             password = this.$refs.password.value;
        if(username =='lili' && password == '123'){
            window.localStorage.setItem('login', 'true');
            window.history.back();
        }
    }
  }
}
</script>

<style scoped>
.wrap{
    width: 100%;
    height: 100%;
    background: #fff;
}
div{
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
}
input{
    width: 80%;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
}
button{
    width: 80%;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    background: #0f0;
    font-size: 20px;
    color: #fff;
}


</style>


