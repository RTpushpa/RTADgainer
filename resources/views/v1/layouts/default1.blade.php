@include('Hospital_V1.layouts.head')
	
<div class="container">
	<div class="logo-brand header sidebar rows">
		<div class="logo">
			<h1><a href="{!! URL::to('/') !!}">{!! config('config.application_name').' '.config('code.version') !!}</a></h1>
		</div>
	</div>
	@include('Hospital_V1.layouts.sidebar')
    <div class="right content-page">

		@include('layouts.header')	
		
        <div class="body content rows scroll-y">
			@yield('breadcrumb')
			
			@include('message')

			@yield('content')

			@include('Hospital_V1.layouts.footer')	
        </div>
    </div>
</div>
<div id="overlay"></div>
<div class="modal fade" id="myModal" role="dialog" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
		</div>
	</div>
</div>
	
@include('Hospital_V1.layouts.foot')	

		
	
	
	