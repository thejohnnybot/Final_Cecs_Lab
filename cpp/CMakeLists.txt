cmake_minimum_required(VERSION 2.8)

option(test "Build all test." OFF)

set(PROJECT_NAME MyProject)
project(${PROJECT_NAME})

set(CMAKE_CXX_FLAGS "-g -Wall")

add_library(project_lib project.cpp)
add_executable(project main.cpp)

target_link_libraries(project project_lib)


# if(test)
#   add_subdirectory(lib/gmock-1.6.0)
#   enable_testing()
#
#   include_directories(${gtest_SOURCE_DIR}/include ${gtest_SOURCE_DIR})
#   include_directories(${gmock_SOURCE_DIR}/include ${gmock_SOURCE_DIR})
#  
#   add_executable(runUnitTests project_test.cpp)
#
#   target_link_libraries(runUnitTests gtest gtest_main)
#   target_link_libraries(runUnitTests gmock gmock_main)
#   target_link_libraries(runUnitTests project_lib)
#
# endif()