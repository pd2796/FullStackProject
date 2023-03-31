package com.example.EmpManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.EmpManagement.model.Employee;
import com.example.EmpManagement.repository.EmployeeRepository;

@SpringBootApplication
public class EmpManagementBackendApplication implements CommandLineRunner{
	@Autowired
	private EmployeeRepository employeeRepository;
	public static void main(String[] args) {
		SpringApplication.run(EmpManagementBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
//		Employee employee = new Employee();
//		employee.setFirstName("parth");
//		employee.setLastName("patel");
//		employee.setEmailId("pd@gmail.com");
//		employeeRepository.save(employee);
	}

}
