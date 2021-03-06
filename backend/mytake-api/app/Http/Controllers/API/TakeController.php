<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Take;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TakeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $takes = Take::all();
        if($takes){
            return response()->json(['data' => $takes, 'apiRedirect' => false]);
        }else{
            return response()->json(['data' => $takes, 'apiRedirect' => false]);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'body' => 'required'
        ]);

        if($validator->fails()){
            $response = array('response' => $validator->getMessageBag(), 'success' => false);
            return $response;
        }else{
            $take = new Take;
            $take->status = false;
            $take->access = false;
            $take->title = $request->title;
            $take->body = $request->body;
            //process img upploads and relationship
            //process video relationship
            //process site relationship
            if ($request->status === "true") {
                $take->status = true;
            }
            if ($request->access === "true") {
                $take->access = true;
            }
            if ($take->save()) {
                return response()->json(['data' => $take, 'apiRedirect' => true , 'status' => $take->status, 'message' => 'Upload Successful']);
            } else {
                return response()->json(['data' => $take, 'apiRedirect' => false , 'status' => $take->status, 'message' => 'Error Occured']);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $take = Take::find($id);
        if($take){
            return response()->json(['data' => $take, 'apiRedirect' => false]);
        }else{
            return response()->json(['data' => $take, 'apiRedirect' => false]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'body' => 'required'
        ]);

        if($validator->fails()){
            $response = array('response' => $validator->getMessageBag(), 'success' => false);
            return $response;
        }else{
            $take = Take::find($id);
            $status = 0;
            $access = 0;
            $take->title = $request->title;
            $take->body = $request->body;
            //process img upploads and relationship
            //process video relationship
            //process site relationship
            if ($request->status) {
                $status = $request->status;
            }
            if ($request->access) {
                $access = $request->access;
            }
            $take->status = $status;
            $take->access = $access;
            if ($take->save()) {
                return response()->json(['data' => $take, 'status' => $take->status, 'message' => 'Upload Successful']);
            } else {
                return response()->json(['data' => $take, 'status' => $take->status, 'message' => 'Error Occured']);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $take = Take::find($id);
        if(Take::destroy($take->id)){
            return response()->json(['data' => $take, 'apiRedirect' => true]);
        }else{
            return response()->json(['data' => $take, 'apiRedirect' => false]);
        }
    }
}
