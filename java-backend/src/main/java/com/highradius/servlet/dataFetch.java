package com.highradius.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.highradius.pojo.business_pojo;
/**
 * Servlet implementation class dataFetch
 */
@WebServlet("/dataFetch")
public class dataFetch extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public dataFetch() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */

		protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			// TODO Auto-generated method stub
			HashMap<Object, Object> Response = new HashMap<Object, Object>();
			ArrayList<business_pojo> Actors = new ArrayList<business_pojo>();
			try {
				//Class.forName("com.mysql.cj.jdbc.Driver");
				Connection connection =getConnection.getCon();
				PreparedStatement ps = connection.prepareStatement("Select sl_no, business_code, cust_number, "
						+ "clear_date, buisness_year, doc_id, posting_date, document_create_date,document_create_date1, due_in_date, "
						+ "invoice_currency, document_type, posting_id,area_business, total_open_amount, baseline_create_date, "
						+ "cust_payment_terms, invoice_id,isOpen,IFNULL(aging_bucket, 'NA') AS aging_bucket,is_deleted From winter_internship");
				ResultSet rs = ps.executeQuery();
				while (rs.next())
				{
					business_pojo ob1 = new business_pojo(rs.getInt("sl_no"),rs.getString("business_code"), rs.getInt("cust_number"),
							rs.getString("clear_date"), rs.getString("buisness_year"), rs.getString("doc_id"),
							rs.getString("posting_date"),rs.getString("document_create_date"),rs.getString("document_create_date1"),
							rs.getString("due_in_date"),rs.getString("invoice_currency"),rs.getString("document_type"),
							rs.getInt("posting_id"),rs.getString("area_business"),rs.getDouble("total_open_amount"),
							rs.getString("baseline_create_date"),rs.getString("cust_payment_terms"),rs.getInt("invoice_id"),
							rs.getInt("isOpen"),rs.getString("aging_bucket"),rs.getInt("is_deleted"));
					Actors.add(ob1);
				}
				Response.put("Customer", Actors);
				String json=new Gson().toJson(Actors);
			}
			catch(Exception e)
			{
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
		
		
	}

}
