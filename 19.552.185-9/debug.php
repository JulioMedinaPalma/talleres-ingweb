<!DOCTYPE html> 
<html> 
<body>
        <h2>URL PROCESADA: http//:<?php echo $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'] ; ?> </h2>
    
    <div> 
        <h2>INFORMACION SOBRE EL REQUEST</h2>
        <table>    
            <tr>
                <th>SCHEME</th>
                <td><?php echo $_SERVER['REQUEST_SCHEME'] ?></td>
            </tr>
            <tr>
                <th>METHOD</th>
                <td><?php echo $_SERVER['REQUEST_METHOD'] ?></td>
            </tr>
            <tr>
                <th>URI</th>
                <td><?php echo $_SERVER['REQUEST_URI'] ?></td>
            </tr>
        </table>
    </div>

    <div>
        <h2>PARAMETROS DEL REQUEST(
            <?php 
                if(!isset($_SERVER['argc'])){
                    echo 0;
                }else{
                    echo $_SERVER['argc'];
                } 
            ?>)
        </h2>

        <table>    
            <tr>
                <td>
                    <?php
                        if(isset($_SERVER['argc'])){
                            echo $_SERVER['argv'];
                        }
                    ?>
                </td>
            </tr>
        </table>
    </div>

    <div> 
        <h2>HEADERS del REQUEST (1)</h2>
        <table>    
            <tr>
                <th>Accept</th>
                <td><?php echo $_SERVER['HTTP_ACCEPT'] ?></td>
            </tr>
            <tr>
                <th>Cache-Control</th>
                <td><?php echo $_SERVER['REMOTE_HOST'] ?></td>
            </tr>
            <tr>
                <th>Upgrade-Insecure-Requests</th>
                <td><?php echo $_SERVER['HTTP_UPGRADE_INSECURE_REQUESTS '] ?></td>
            </tr>
            <tr>
                <th>User-Agent</th>
                <td><?php echo $_SERVER['HTTP_USER_AGENT'] ?></td>
            </tr>
            <tr>
                <th>Accept-Lenguage</th>
                <td><?php echo $_SERVER['HTTP_ACCEPT_LANGUAGE'] ?></td>
            </tr>
            <tr>
                <th>Connection</th>
                <td><?php echo $_SERVER['HTTP_CONNECTION'] ?></td>
            </tr>
            <tr>
                <th>Host</th>
                <td><?php echo $_SERVER['HTTP_HOST'] ?></td>
            </tr>
            <tr>
                <th>Accept-Encoding</th>
                <td><?php echo $_SERVER['HTTP_ACCEPT_ENCODING'] ?></td>
            </tr>
        </table>
    </div>

    <div>
        <h2>Información sobre el SERVER</h2>
        <table>
            <tr>
                <th>Name</th>
                <td><?php echo $_SERVER['SERVER_NAME'] ?></td>
            </tr>
            <tr>
                <th>Address</th>
                <td><?php echo $_SERVER['SERVER_ADDR'] ?></td>
            </tr>
            <tr>
                <th>Protocol</th>
                <td><?php echo $_SERVER['SERVER_PROTOCOL'] ?></td>
            </tr>
            <tr>
                <th>DocumentRoot</th>
                <td><?php echo $_SERVER['DOCUMENT_ROOT'] ?></td>
            </tr>
            <tr>
                <th>Software</th>
                <td><?php echo $_SERVER['SERVER_SOFTWARE'] ?></td>
            </tr>
            <tr>
                <th>Gateway Interface</th>
                <td><?php echo $_SERVER['GATEWAY_INTERFACE'] ?></td>
            </tr>              
        </table>
    </div>

    <div>
        <h2>Información sobre el SCRIPT</h2>


        <table>
            <tr>
                <th>Name</th>
                <td><?php echo $_SERVER['SCRIPT_NAME'] ?></td>
            </tr>
            <tr>
                <th>FileName</th>
                <td><?php echo $_SERVER['SCRIPT_FILENAME'] ?></td>
            </tr>
            <tr>
                <th>PHP-SELF</th>
                <td><?php echo $_SERVER['PHP_SELF'] ?></td>
            </tr>

        </table>               
    </div>

</body> 
</html> 

