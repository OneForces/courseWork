package com.example.optics.models;

public enum Permission {
    CUSTOMERS_READ("customers:read"),
    CUSTOMERS_WRITE("customers:write");

    private final String permission;

    Permission(String permission) {
        this.permission = permission;
    }

    public String getPermission() {
        return permission;
    }
}
