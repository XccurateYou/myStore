<template>
            <div class="form-box register">
                <form>
                    <h2>Sign Up</h2>

                    <div class="input-box">
                        <span class="icon">
                            <i class='bx bxs-user'></i>
                        </span>
                        <!-- required属性表示必须要这个input框的value -->
                        <input type="text" required>
                        <label>Name</label>
                    </div>

                    <div class="input-box">
                        <span class="icon">
                            <i class='bx bxs-envelope'></i>
                        </span>
                        <!-- required属性表示必须要这个input框的value -->
                        <input type="email" required>
                        <label>Email</label>
                    </div>

                    <div class="input-box">
                        <span class="icon">
                            <i class='bx bxs-lock-alt'></i>
                        </span>
                        <!-- required属性表示必须要这个input框的value -->
                        <input type="password" required>
                        <label>Password</label>
                    </div>

                    <div class="remember-forget">
                        <label>
                            <input type="checkbox">I agree to the terms
                        </label>
                    </div>

                    <button type="submit" class="btn">
                        Sign Up
                    </button>

                    <div class="login-register">
                        <p>
                            Already have an account?
                            <a href="#" class="login-link" @click="regsiterChangeLogin()">Sign in</a>
                        </p>
                    </div>
                </form>
            </div>
</template>

<script>
export default {
    name:'logregboxFormRegister',
    methods:{
        regsiterChangeLogin(){
            this.$store.dispatch('change')
        }
    }
}
</script>

<style scoped>
.form-box {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: transparent;
    backdrop-filter: blur(14px);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    color: #e4e4e4;
}

.logreg-box .form-box.register {
    transform: translateX(100%);
    opacity: 0;
    transition: transform 1s ease;
    transition-delay: 0s;
}


.logreg-box.active .form-box.register {
    opacity: 1;
    transform: translateX(0);
    transition-delay: 0s;
}

.form-box h2 {
    font-size: 32px;
    text-align: center;
}

.form-box .input-box {
    position: relative;
    width: 340px;
    height: 50px;
    border-bottom: 2px solid #e4e4e4;
    margin: 30px 0;
}

.input-box input {
    font-size: 16px;
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: #e4e4e4;
    font-weight: 500;
    padding-right: 28px;
}

.input-box label {
    position: absolute;
    font-size: 16px;
    font-weight: 500;
    /* 鼠标点击可以穿透该元素或者说是无视该元素 */
    pointer-events: none;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: .5s ease;
}

.input-box input:focus~label,
.input-box input:valid~label {
    top: -5px;

}

.input-box .icon {
    position: absolute;
    right: 0;
    top: 13px;
    font-size: 19px;
}

.btn {
    width: 100%;
    height: 45px;
    background: #67a7d1;
    border: none;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    color: #e4e4e4;
    font-weight: 500;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
}

.form-box .login-register {
    font-size: 14.5px;
    font-weight: 500;
    text-align: center;
    margin-top: 25px;
}

.login-register p a {
    color: #e4e4e4;
    font-weight: 600;
    text-decoration: none;
}

.login-register p a:hover {
    text-decoration: underline;
}
</style>