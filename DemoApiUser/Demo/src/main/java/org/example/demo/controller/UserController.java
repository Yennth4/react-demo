package org.example.demo.controller;

import org.example.demo.model.UserEntity;
import org.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;
    
    @GetMapping
    public ResponseEntity<Map<String, Object>> getAllUsers() {
        List<UserEntity> listUsers = new ArrayList<>();
        listUsers = userService.getAllUsers();
        Map<String, Object> response = new HashMap<>();
        response.put("DT", listUsers);
        response.put("EC", 0);
        response.put("EM", "GetAll list participants succeed");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<UserEntity> getUserById(@PathVariable Integer id) {
        Optional<UserEntity> user = userService.getUserById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> createUsers(
            @RequestBody UserEntity newuser) {

        UserEntity user = newuser;

        UserEntity createdUser = userService.createUser(user);

        Map<String, Object> response = new HashMap<>();
        response.put("DT", createdUser);
        response.put("EC", 0);
        response.put("EM", "Create a new participant succeed");

        return ResponseEntity.ok(response);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Map<String, Object>> updateUser(@PathVariable Integer id, @RequestBody UserEntity userDetails) {

        UserEntity updatedUser = userService.updateUser(id, userDetails);
        Map<String, Object> response = new HashMap<>();
        response.put("DT", updatedUser);
        response.put("EC", 0);
        response.put("EM", "User update successful");
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Integer id) {
        try {
            userService.deleteUser(id);
            return ResponseEntity.status(HttpStatus.OK).body("User deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting user");
        }
    }
}

