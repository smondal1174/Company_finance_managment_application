package com.highradius.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.highradius.pojo.business_pojo;


@WebServlet("/searchData")
public class searchData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public searchData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		ArrayList<business_pojo> al=new ArrayList<>(); 
		HashMap<Object, Object> Response = new HashMap<Object, Object>();
		String doc_id = request.getParameter("doc_id");
		int invoice_id= Integer.parseInt(request.getParameter("invoice_id"));
		int cust_number = Integer.parseInt(request.getParameter("cust_number"));
		String buisness_year = request.getParameter("buisness_year");
		try {
			
			
			Class.forName("com.mysql.cj.jdbc.Driver"); 
			Connection connection=getConnection.getCon(); 
			PreparedStatement ps = connection.prepareStatement("select * from winter_internship "
					+ "where doc_id= ? and invoice_id= ? and cust_number= ? and buisness_year= ? ");
			ps.setString(1,doc_id);
			ps.setInt(2, invoice_id);
			ps.setInt(3, cust_number);
			ps.setString(4,buisness_year);
			
			ResultSet rs = ps.executeQuery();	
			while(rs.next()) {
				
				business_pojo ob1 = new business_pojo(rs.getInt("sl_no"),rs.getString("business_code"), rs.getInt("cust_number"),
						rs.getString("clear_date"), rs.getString("buisness_year"), rs.getString("doc_id"),
						rs.getString("posting_date"),rs.getString("document_create_date"),rs.getString("document_create_date1"),
						rs.getString("due_in_date"),rs.getString("invoice_currency"),rs.getString("document_type"),
						rs.getInt("posting_id"),rs.getString("area_business"),rs.getDouble("total_open_amount"),
						rs.getString("baseline_create_date"),rs.getString("cust_payment_terms"),rs.getInt("invoice_id"),
						rs.getInt("isOpen"),rs.getString("aging_bucket"),rs.getInt("is_deleted"));
				al.add(ob1);
			}
			Response.put("SearchedData", al);
			
		}
		catch(Exception e){
			e.printStackTrace();			
		}
		Gson gson = new Gson();
		String jsonResponse = gson.toJson(Response);
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.getWriter().append(jsonResponse);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub		

	}

}