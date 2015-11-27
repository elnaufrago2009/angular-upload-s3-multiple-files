var app = angular.module('fileUpload', ['ngFileUpload']);

app.controller("MyCtrl", function($scope, Upload){
	$scope.subirArchivos = function(files){		
		files.forEach(function(file) {		  
		    Upload.upload({
			    url: 'https://katuq.s3.amazonaws.com/', 
			    method: 'POST',
			    data: {
			        key: file.name, 
			        AWSAccessKeyId: 'AKIAJIHQHU5IPXHAOJJQ',
			        acl: 'public-read', 
			        policy: 'ewogICJleHBpcmF0aW9uIjogIjIwMjAtMDEtMDFUMDA6MDA6MDBaIiwKICAiY29uZGl0aW9ucyI6IFsKICAgIHsiYnVja2V0IjogImthdHVxIn0sCiAgICBbInN0YXJ0cy13aXRoIiwgIiRrZXkiLCAiIl0sCiAgICB7ImFjbCI6ICJwdWJsaWMtcmVhZCJ9LAogICAgWyJzdGFydHMtd2l0aCIsICIkQ29udGVudC1UeXBlIiwgIiJdLAogICAgWyJzdGFydHMtd2l0aCIsICIkZmlsZW5hbWUiLCAiIl0sCiAgICBbImNvbnRlbnQtbGVuZ3RoLXJhbmdlIiwgMCwgNTI0Mjg4MDAwXQogIF0KfQ==',
			        signature: 'gSXOy3Ec0im5Kbjptud03yGwUv0=',
			        "Content-Type": file.type != '' ? file.type : 'application/octet-stream', 
			        filename: file.name, 
			        file: file
			    }
			});
		});		
	}
});
