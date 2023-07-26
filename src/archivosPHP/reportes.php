<?php
include("conexion.php");
require_once '../dompdf/autoload.inc.php';

$con=conectarDB();

use Dompdf\Dompdf;
use Dompdf\Options;


$query = "SELECT nombreMedicamento,cantidad,fechaVencimiento,lote,sucursal,proveedor,tipo_medicamento.etiquetaTipoProducto,medicamentos.idUsuario,usuarios.nombre,fechaIngreso,numeroFactura FROM medicamentos 
INNER JOIN tipo_medicamento ON tipo_medicamento.idTipoProducto = medicamentos.idTipoProducto
INNER JOIN usuarios ON usuarios.id = medicamentos.idUsuario ORDER BY fechaIngreso DESC";
$result_tasks = mysqli_query($con,$query);

$html = '<style>';
$html .= 'body {';
    $html .= 'margin: 0px;';
    $html .= 'font-family: Verdana, sans-serif;';
$html .= '}';
$html .= '.thead {';
    $html .= 'font-weight: bold;';
    $html .= 'text-align: center;';
$html .= '}';
$html .= '.right {';
    $html .= 'text-align: right;';
$html .= '}';
$html .= '</style>';
$html .= '<center><h2>REPORTES MEDICAMENTOS</h2></center><br/>';
$html .='<table class="table table-bordered">
                    <thead>
                        <tr>
                            <th class="thead">Nombre</th>
                            <th class="thead">Cantidad</th>
                            <th class="thead">Vencimiento</th>
                            <th class="thead">lote</th>
                            <th class="thead">sucursal</th>
                            <th class="thead">proveedor</th>
                            <th class="thead">Clasificacion</th>
                            <th class="thead">Usuario(id)</th>
                            <th class="thead">Nombre</th>
                            <th class="thead">fechaIngreso</th>
                            <th class="thead">NumFactura</th>
                        </tr>
                    </thead>
                    <tbody>';
                        
                        
                 $contador =0;   

                while($row = mysqli_fetch_array($result_tasks)) {
                    $contador++;
                    $html .= '<tr>
                                <td class="right">'.$row['nombreMedicamento'].'</td>
                                <td class="right">'.$row['cantidad'].'</td>
                                <td class="right">'.$row['fechaVencimiento'].'</td>
                                <td class="right">'.$row['lote'].'</td>
                                <td class="right">'.$row['sucursal'].'</td>
                                <td class="right">'.$row['proveedor'].'</td>
                                <td class="right">'.$row['etiquetaTipoProducto'].'</td>
                                <td class="right">'.$row['idUsuario'].'</td>
                                <td class="right">'.$row['nombre'].'</td>
                                <td class="right">'.$row['fechaIngreso'].'</td>
                                <td class="right">'.$row['numeroFactura'].'</td>
                            </tr>';
                }

                $html.= '</tbody>
                    </table>';
                        
                        /*
                        

                        while($row = mysqli_fetch_array($result_tasks)) {
                            $html .=' <tr>
                                <td>'.$row['nombre'];</td>
                                <td><?php echo $row['valor']; ?></td>
                                <td><?php echo $row['fecha']; ?></td>
                                <td>
                                    <a href="data_edit.php?id=<?php echo $row['id'] ?>&amp;nombre=<?php echo $row['nombre'] ?>&amp;fecha=<?php echo $row['fecha'] ?>" class="btn btn-secondary">
                                        <i class="fa-sharp fa-solid fa-marker"></i>
                                    </a>
                                    <a href="data_delete.php?id=<?php echo $row['id'] ?>&amp;nombre=<?php echo $row['nombre'] ?>&amp;fecha=<?php echo $row['fecha'] ?>" class="btn btn-danger">
                                        <i class="fa-sharp fa-solid fa-trash"></i>
                                    </a>

                                </td>





                                
                            </tr>

                        <?php } ?>*/
                    
//echo $html;

// Options
$options = new Options();
$options->set('isRemoteEnabled', TRUE);

// instantiate and use the dompdf class
$dompdf = new Dompdf($options);

$dompdf->loadHtml($html);

// (Optional) Setup the paper size and orientation
$dompdf->setPaper('letter', 'landscape');

// Render the HTML as PDF
$dompdf->render();

// Output the generated PDF to Browser
return $dompdf->stream("comprobante.pdf", array('Attachment'=>0));

?>