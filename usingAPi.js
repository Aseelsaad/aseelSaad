Vue.component('message',{
    'props':['title','body'],
    'template':`
<div class="container">
<div  class="panel panel-default class">
                    <div class="panel-heading">
                    <h4 class="display-2">  Title : {{title}}</h4>
                    
                    </div>
               
                     <div class="panel-body">
                   <h4 class="display-3"> Content : </h4>
                   <p>{{body}}</p>   
                    </div>
                </div>
</div>

`
    ,
    'data':function () {
        return {

        }
    }
});
Vue.component('tool-bar',{
    'template':`
<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">
                <img class="img-responsive" style="width:36px;margin-top:-13px;" src="pp.jpg" alt="Profile Picture">
            </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li class="active"><a href="/">Home <span class="sr-only">(current)</span></a></li>
                <li><a href="#">About me</a></li>
               
                <li><a href="#">To contact</a></li>
               
            </ul>
            <form class="navbar-form navbar-right">
                <div class="dropdown ">
                    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Tasks
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="AseelSaad.html">Home</a></li>
                        <li><a href="firstHomeWork.html">First HomeWork</a></li>
                        <li><a href="secondHomeWork.html">Second HomeWork</a></li>
                        


                    </ul>
                </div>

      </form>
                    </div><!-- /.navbar-collapse -->

    </div><!-- /.container-fluid -->
</nav>

`,

    'data'(){
        return {

        }
    },

});